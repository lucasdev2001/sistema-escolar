import { useRouter } from "next/router";
import { useState } from "react";
import Aluno from "../../models/Aluno";
import dbConnect from "../../lib/dbConnect";
import Spinner from "../../components/Spinner";

export default function Edit({ aluno }) {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({
    nome: String,
    cpf: String,
    sexo: String,
    email: String,
    telefone: String,
  });

  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const putData = async (form) => {
    try {
      const res = await fetch(`../api/alunos/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putData(form);
  };

  const handleClick = () => {
    setLoading(true);
  };
  return (
    <>
      <div className="alert alert-warning m-3 rounded-3 p-5" role="alert">
        <p className="lead text-center">
          Atenção! A máscara de formulário esta desativada nesta página, edite
          com cuidado!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            defaultValue={aluno.nome}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input
            type="text"
            className="form-control"
            name="cpf"
            defaultValue={aluno.cpf}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sexo</label>
          <input
            type="text"
            className="form-control"
            name="sexo"
            defaultValue={aluno.sexo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            defaultValue={aluno.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            name="telefone"
            defaultValue={aluno.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Alterar
          </button>
          <br />
          <br />
          {isLoading ? <Spinner /> : ""}
        </div>
      </form>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const aluno = await Aluno.findById(params.id).lean();
  aluno._id = aluno._id.toString();

  return { props: { aluno } };
}
