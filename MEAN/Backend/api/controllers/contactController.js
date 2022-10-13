//import Todo Model
const  Contact = require("../models/contactModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
    if (err) {
    res.status(500).send(err);
    }
    res.status(200).json(contact);
    });
    };


    
    // createNewTodo function - To create new todo
    exports.createNewContact = (req, res) => {
    let  newContact = new Contact (req.body);
    newContact.save((err, contact) => {
    if (err) {
    res.status(500).send(err);
    }
    res.status(201).json(contact);
    });
    };
    
    // updateTodo function - To update todo status by id
    exports.updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, contact) => {
    if (err) {
    res.status(500).send(err);
    }
    res.status(200).json(contact);
    });
    };
    
    // deleteTodo function - To delete todo by id
    exports.deleteContact = async ( req, res) => {
    await  Contact.deleteOne({ _id:req.params.id }, (err) => {
    if (err) {
    return res.status(404).send(err);
    }
    res.status(200).json({ message:"Contact successfully deleted"});
    });
    };