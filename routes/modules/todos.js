const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// Get new Todo template
router.get('/new', (req, res) => {
  return res.render('new')
})

// Post new Todo
router.post('/', (req, res) => {
  const UserId = req.user.id
  const name = req.body.name
  return Todo.create({ UserId, name })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Get specific Todo detail
router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

// Get specific Todo for Edit/Update
router.get('/:id/edit', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      res.render('edit', { todo: todo.toJSON() })
    })
    .catch(error => console.log(error))
})

// Edit/Update specific Todo
router.put('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.log(error))
})

// Delete
router.delete('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.destroy({ where: { id, UserId } })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router