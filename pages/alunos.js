import dbConnect from "../lib/dbConnect"
import Aluno from "../models/Aluno"
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Alunos = ({data})=>{
  const handleClick = (e) => {
    e.preventDefault()
    window.location.replace("/localizacoes");
  }

    return(
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

      <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Início</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/estatisticas"><a className="nav-link">Estatísticas</a></Link>
          </li>
          <li className="nav-item">
            <a href="" onClick={handleClick} className="nav-link">Localizações</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <main>
    <div className="container-fluid"> 
      <div className="row row-cols-1 row-cols-md-3 g-5 d-flex justify-content-center">
        {data.map((data)=>{
          return(
            <div className="col" key={data.id}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{data.nome}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{data.cpf}</li>
                <li className="list-group-item">{data.sexo}</li>
                <li className="list-group-item">{data.email}</li>
                <li className="list-group-item">{data.telefone}</li>
              </ul>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">Editar</a>
              <a href="#" className="card-link">Deletar</a>
          </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  </main>
    </>
    )
}

export async function getServerSideProps() {
    await dbConnect();
    const result = await Aluno.find({});
    const datarev = result.map((doc)=>{
      const datarev = doc.toObject()
      datarev._id = datarev._id.toString()
      return datarev;
    })
    const data = datarev.reverse()
  
    return { props: { data } }
  }

export default Alunos