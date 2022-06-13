import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import dbConnect from "../lib/dbConnect"
import Aluno from "../models/Aluno"
import Script from "next/script"

export default function Estatisticas({ objetoNumeros }) {
  let isEmpty = false

  const handleFirstLink = (e) => {
    e.preventDefault()
    window.location.replace("/")
  }

  const handleSecondLink = (e) => {
    e.preventDefault()
    window.location.replace("/localizacoes")
  }

  if (objetoNumeros.numeroHomens === 0 && objetoNumeros.numeroMulheres === 0) {
    isEmpty = true
  }

  ChartJS.register(ArcElement, Tooltip, Legend)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center text-center"
            id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="" onClick={handleFirstLink}>início</a>
              </li>
              <li className="nav-item">
                <a href="" onClick={handleSecondLink} className="nav-link">Localizações</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="container-fluid d-flex justify-content-center text center row">
          <p className="col-12 text-center lead">Quantidade de alunos por gênero</p>
          {isEmpty ? (<p className="text-center">Humm.. Parece que ainda não há registros suficientes</p>) : ("")}
          <div className="w-50 d-flex justify-content-center col-12">
            <Pie
              data={{
                labels: ["Mulheres", "Homens"],
                datasets: [
                  {
                    label: "# of pessoas ",
                    data: [
                      objetoNumeros.numeroMulheres,
                      objetoNumeros.numeroHomens
                    ],
                    backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
        </div>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()
  const resultHomens = await Aluno.find({ sexo: "masculino" })
  const dataHomens = resultHomens.map((doc) => {
    const dataHomens = doc.toObject()
    dataHomens._id = dataHomens._id.toString()
    return dataHomens
  })

  const resultMulheres = await Aluno.find({ sexo: "feminino" })
  const dataMulheres = resultMulheres.map((doc) => {
    const dataMulheres = doc.toObject()
    dataMulheres._id = dataMulheres._id.toString()
    return dataMulheres
  })

  let objetoNumeros = {
    numeroMulheres: dataMulheres.length,
    numeroHomens: dataHomens.length
  }

  return { props: { objetoNumeros } }
}
