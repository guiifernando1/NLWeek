import express from 'express';

const app = express();

/**
* GET => busca
* POST => salvar
* PUT => alterar
* DELETE
* PATCH => alteração especifica
*/


app.get("/", (request, response) => {
    return response.json({ message: "hello World"});

})

// 1 Param => rota(recurso API)
// 2 param => request, response

app.post("/", (request, response) => {
    //recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});
})

app.listen(3333, () => console.log("Server is running"));


