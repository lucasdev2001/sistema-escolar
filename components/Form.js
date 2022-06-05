import { useState } from 'react'
import { useRouter } from 'next/router'

//este form está em desenvolvimento para também ser reutilizado em [id]/edit

const Form = ({formId,alunoForm,paraNovoAluno=true},props) => {
    const router = useRouter()
    const contentType = 'application/json'
    const [message, setMessage] = useState('')


    const [form,setForm] = useState({
        nome: alunoForm.nome,
        cpf: alunoForm.cpf,
        sexo: alunoForm.sexo,
        email: alunoForm.email,
        telefone: alunoForm.telefone,
    })

    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setForm({
            ...form,
            [name]:value,
        
        })
    }    

    const postData = async(form)=>{
        try {
            const res = await fetch('/api/alunos',{
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType
                },
                body: JSON.stringify(form)
            })
            if (!res.ok) {
                throw new Error(res.status)
              }
              router.push('/alunos')
        } catch (error) {
            setMessage('Falha ao adicionar novo aluno')
        }
    }

    const putData = async(form)=>{
        try {
            const res = await fetch(`../api/alunos/${id}`,{
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
            
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        paraNovoAluno ? postData(form) : putData(form) // ainda em desenvolvimento.
      }


    
  return (
  <>
    <form id={formId} onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" name='nome' onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label className="form-label">CPF</label>
            <input type="text" className="form-control" name='cpf' id='cpf' onChange={handleChange} />
        </div>
        <div className="mb-3">
        <label className="form-label">Sexo</label>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="sexo" id="sexo" value="masculino" onChange={handleChange} />
        <label className="form-check-label">
            masculino
        </label>
        </div>
        <div className="form-check">
        <label className="form-check-label">
            feminino
        </label>
        <input className="form-check-input" type="radio" name="sexo" id="sexo" value="feminino" onChange={handleChange} />
        
        </div>
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name='email' onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Telefone</label>
            <input type="text" className="form-control" name='telefone' onChange={handleChange}/>
        </div>
        <p>{message}</p>
        <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  </>
  )  
}

export default Form