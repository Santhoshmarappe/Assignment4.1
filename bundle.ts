
//Create a namespace and add an interface and a function.
 namespace message {
    
    export interface messageType {
        type: string;
    }
    //consume that interface and function from another file with the help of namespace.
    export function displayMessage (message) {
        //display a message in a console.log()
        console.log(message); 

    }

}



