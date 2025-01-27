var express = require('express');
var router = express.Router();
const todoController = require("../controllers/todo_controller")

/* GET home page. */
router.get('/', toDoController.homeRoute)

router.get('/add', toDoController.renderAddForm);

router.post('/add', toDoController.addNewItem);

router.get('/complete/:id', toDoCOntroller.markItemAsComplete);

router.get('/incomplete/:id', toDoController.markItemAsIncomplete);

router.get('/delete/:id', toDoController.deleteItem);

router.get('/edit/:id', toDoController.renderEditForm);

router.post('/post/:id', toDoController.updateItem);
module.exports = router;