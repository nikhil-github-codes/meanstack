
//create App function
module.exports = function(app) {
        var contactList = require('../controllers/contactController');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/contacts")
        .get(contactList.listAllContacts)
        .post(contactList.createNewContact);

// put and delete request for /todos endpoints
        app
        .route("/contact/:id")
        .put(contactList.updateContact)
        .delete(contactList.deleteContact);
    };