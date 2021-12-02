const conexao = require('./conexao')

const executaQuery = (query, parametros = '')  => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultado, campos) => {
            if(erros) {
                reject(erros)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = executaQuery