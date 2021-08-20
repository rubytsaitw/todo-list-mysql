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

router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({
    where: { id, UserId }
  })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router