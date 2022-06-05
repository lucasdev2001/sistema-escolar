import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import dbConnect from '../lib/dbConnect';
import Aluno from '../models/Aluno';
import Link from 'next/link'



export default function Estatisticas({objetoNumeros}) {
    ChartJS.register(ArcElement, Tooltip, Legend);
    console.log(objetoNumeros.numeroMulheres);
    return (
    <>
<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/alunos"><a className="nav-link">Alunos</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/localizacoes"><a className="nav-link">Localizações</a></Link>
          </li>
          <li className="nav-item">
          <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" href=''>Início</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <main>
        <div className = "container-fluid d-flex justify-content-center text center row">
        <p className="col-12 text-center lead">Quantidade de alunos por gênero</p>
        <div className="w-50 d-flex justify-content-center col-12">
        <Pie data={{labels: ['Mulheres','Homens'],
  datasets: [
    {
      label: '# of pessoas ',
      data: [objetoNumeros.numeroMulheres,objetoNumeros.numeroHomens],
      backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
    ],
      borderWidth: 1,
    },
    
  ],}}/>
        </div>


        
        </div>
      </main>
    </>
    )
}

export async function getServerSideProps() {
    await dbConnect()
    const resultHomens = await Aluno.find({sexo: "masculino"})
    const data1 = resultHomens.map((doc)=>{
      const data1 = doc.toObject()
      data1._id = data1._id.toString()
      return data1
    })

    const resultMulheres = await Aluno.find({sexo: "feminino"})
    const data = resultMulheres.map((doc)=>{
      const data = doc.toObject()
      data._id = data._id.toString()
      return data
    })

   let objetoNumeros = {
     numeroMulheres: data.length,
     numeroHomens: data1.length
   }

   console.log(objetoNumeros);
  
    return { props: { objetoNumeros } }
  }