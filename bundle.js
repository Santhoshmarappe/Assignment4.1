//Create a namespace and add an interface and a function.
var message;
(function (message_1) {
    //consume that interface and function from another file with the help of namespace.
    function displayMessage(message) {
        //display a message in a console.log()
        console.log(message);
    }
    message_1.displayMessage = displayMessage;
})(message || (message = {}));
