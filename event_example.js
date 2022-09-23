
const EventEmetter = require('events');
const emitter = new EventEmetter();

//Register a listener 
emitter.on('messageLogged',function(){
    console.log('Listener called')
})


//Raise an event
emitter.emit('messageLogged');
