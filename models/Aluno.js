import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    sexo: {
        type: String
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    },
})

export default mongoose.models.Aluno || mongoose.model('Aluno',alunoSchema)