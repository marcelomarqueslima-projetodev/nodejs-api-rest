const res = require('express/lib/response')
const conexao = require('../infraestrutura/database/conexao')
const { reset } = require('nodemon')
const uploadDeArquivos = require('../infraestrutura/arquivo/uploadDeArquivos')

class Pet {
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets SET ?'

        uploadDeArquivos(pet.image, pet.nome, (erro, novoCaminho) => {
            if(erro){
                res.status(400).json({ erro })
            } else {
                const novoPet = { nome: pet.nome, image: novoCaminho }
                conexao.query(query, novoPet, erro => {
                    if(erro) {
                        res.status(400).json(erro)
                    } else {
                        res.status(201).json(novoPet)
                    }
                })
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM Pets'

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Pet()