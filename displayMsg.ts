

///<reference path="bundle.ts"/>

// declare the message with interface datatype;
let messageValue: message.messageType = {
    type:'Hey I have created namespace method and interface from another file with the help of Namespace'};

// call the namespace method with parameter as interface property;
 message.displayMessage(messageValue.type);

// check output info
 document.write("Please check the console to view the Message");