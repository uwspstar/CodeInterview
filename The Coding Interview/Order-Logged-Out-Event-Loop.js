//Order Logged Out - Solution Source Code
//event loop , task queue, Microtasks, and Macrotasks


function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}
 
logNumbers();

/*
1
4
3
2
*/
  
/*
event loop

setTimeout, 
http.get, 
process.nextTick,
fs.readFile
 
Neither of these things can be found in V8's code, 
but they are available in the Chrome WebApi and the C++ API in case of Node.js

where callbacks are waiting for their turn to be executed is called the task queue 
(or event queue, or message queue). 
Callbacks are being called in an infinite loop 
whenever the main thread has finished its previous task, hence the name 'event loop'.
 
https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/

Microtasks and Macrotasks
If this wasn't enough, we actually have more then one task queue. One for microtasks and another for macrotasks.

examples of microtasks:

process.nextTick
promises
Object.observe


examples of macrotasks:

setTimeout
setInterval
setImmediate
I/O

https://blog-assets.risingstack.com/2016/10/the-Node-js-event-loop.png
*/
