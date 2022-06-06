import dbConnect from "../../../lib/dbConnect"
import Aluno from "../../../models/Aluno"
export default async function handler (req,res){
    const {method} = req
    await dbConnect()
    switch (method) {
        case 'GET':
            try {
                const alunos = await Aluno.find({})
                return res.status(200).json({success: true, data: alunos})
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const aluno = await Aluno.create(req.body)
                return res.status(201).json({ success: true, data: aluno })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}