const express = require('express')
const app = express()
const port = 3030

app.use(express.json())

//import { getData } from "./module.js"
//console.log(getData())

let users = [
// {
//   "id": 1,
//   "name": "João da Silva",
//   "email": "joao@ufca.edu.br",
//   "age": 30,
//   "gender": "male"
// }
]

const getAllUsers = () => users

const createUser = (newUser) => users.push(newUser)

const updateUserById = (userId, newUser) => {
  const user = users.find(user => user.id === userId)

  if (user) {
    Object.assign(user, newUser)
    return newUser
  }

  return undefined
}

const deleteUserById = (userId) => {
  users = users.filter(user => user.id !== userId)
}


// Rota principal para a página inicial
app.get('/', (req, res) => {
    // Envie uma página HTML como resposta
    res.send('<html><body><h1>Página inicial</h1></body></html>')
})

// Rota GET para CRUD de usuários
app.get('/users', (req, res) => {
    // Buscar usuários
    res.send(getAllUsers())
})

app.post('/add/user', (req, res) => {
    // Criar usuários
    let user = req.body
    createUser(newUser)

    console.log(user.id)
    res.send('added')
    res.status(201).json(newUser)
})

app.put('/user/:id', (req, res) => {
    // Atualizar usuário
    let id = req.params['id']
    let new_user = {
        "id": id,
        "name": "",
        "email": "",
        "age": 0,
        "gender": ""
    }

    // Atualizar dados (específicos) dos usuários
    Object.keys(req.body).forEach(key => {
        if (req.body[key])
            new_user[key] = req.body[key]
    })

    let result = (r = updateUserById(id, new_user)) => (
        r ? 'Error, user not found!' : r)

    res.send(result)
    res.status(200).send('Usuário atualizado com sucesso.')
})

// Rota para excluir um usuário
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    deleteUserById(userId)
    res.status(200).send('Usuário excluído com sucesso.')
});

// Rota para excluir usuários

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
