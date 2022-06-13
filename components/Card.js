import { useState } from "react"
export default function Card(props) {

  const [isLoading,setLoading] = useState(false)

  const handleDelete = async (e) => {
    try {
      await fetch(`../api/alunos/${e.target.id}`, {
        method: "DELETE"
      })
      setLoading(true)
      window.location.replace("/")
    } catch (error) {
      console.log(error)
    }
  }

  const Spinner = ()=>{
    return (
      <div className="col-12" id="spinner">
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    )
  }

  const handleClick = ()=>{
    setLoading(true)
  }

  return (
    <>
      <div className="col grow">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{props.nome}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.cpf}</li>
              <li className="list-group-item">{props.sexo}</li>
              <li className="list-group-item">{props.email}</li>
              <li className="list-group-item">{props.telefone}</li>
            </ul>
          </div>
          <div className="card-body">
            <a href={props.id + "/edit"} className="btn btn-primary m-1" onClick={handleClick}>
              Editar
            </a>
            <a
              className="btn btn-danger m-1"
              id={props.id}
              onClick={handleDelete}>
              Deletar
            </a>
            <br />
            {isLoading ? <Spinner /> : ""}
          </div>
        </div>
      </div>
    </>
  )
}
