//Event Module
//Node.js Has a built-in module,called "Events",
//where you can  create-,fire-,and listen for your own events.

//Examplw 1- Registering for the event to be fired only one time using once.

//Example 2- Create an event emitter instance and register a couple of callbacks.

//Example 3-Registering for the evnet with the callback parameters

const EventEmitter = require('events');

const event = new EventEmitter();

//solution to above example 1.
event.on('sayMyName',()=>{
    console.log("Your name is pranali")
})
//event.emit('sayMyName');

//solution to above example 2.(register a couple of callback)

event.on('sayMyName',()=>{
    console.log("Your name is Dipak")
});

event.on('sayMyName',()=>{
    console.log("Your name is Jahagirdar")
});

//event.emit('sayMyName');



//solution to above example 3.
event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit('checkPage',200,'ok');
