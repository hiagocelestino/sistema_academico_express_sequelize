const database = require('../models');

class TurmaController{

    static async pegaTodasAsTurmas(req, res){

        try{
            const pegaTodosTurmas = await database.Turmas.findAll();
            return res.status(200).json(pegaTodosTurmas);
        }catch(error){
            return res.status(500).json(error.message);
        }

    }

    static async pegaTurma(req, res){
        const { id } = req.params;
        try{
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaTurma);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
    
    static async criaTurma(req, res){
        const novaTurma = req.body;
        try{
            const novaTurmaCriado = await database.Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res){
        const { id } = req.params;
        const novasInfos = req.body;
        try{
            await database.Turmas.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            });
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaTurma);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req, res){
        const { id } = req.params;
        try{
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }})
            return res.status(201).json({message: `id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = TurmaController;