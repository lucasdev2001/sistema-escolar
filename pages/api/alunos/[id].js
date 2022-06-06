import dbConnect from "../../../lib/dbConnect"
import Aluno from "../../../models/Aluno"

export default async function handler(req,res) { 
const { query:{ id }, method} = req
await dbConnect()
switch (method) {
    case 'GET':
        try {
            const aluno = await Aluno.findById(id)
            if (!aluno) return res.status(400).json({success: false})
            res.status(200).json(aluno)
        } catch (error) {
            return res.status(400).json({success: false})
        }
        break

    case 'PUT':
        try {
            const aluno = await Aluno.findByIdAndUpdate(id,req.body,{new: true,runValidators: true})
            if (!aluno) return res.status(400).json({success: false})
            res.status(200).json({success:true, aluno})
        } catch (error) {
            return res.status(400).json({success: false})
        }
        break
    
    case 'DELETE':
        try {
            const deleteAluno = await Aluno.deleteOne({_id: id})
            if (!deleteAluno)  return res.status(400).json({ success: false })
            res.status(200).json({ success: true, data: {} })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break

    default:
        res.status(400).json({ success: false })
        break
}

 }