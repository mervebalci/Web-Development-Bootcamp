/*
    ## EVENT HANDLERS
JavaScript in the browser uses an event-driven programming model.
Usually, things start by responding to an **event**.
The event could be the DOM is loaded, an asynchronous request that finishes fetching, a user clicking an element or scrolling the page or the user types on the keyboard.

You can respond to any event using an **Event Handler**, which is a function that's called when an event occurs.
You can register multiple handlers for the same event, and they will all be called when that event happens.

JavaScript offers three ways to register an event handler:
    - Inline event handlers
    - DOM on-event handlers
    - addEventListener
*/

// Inline event handlers
// This style of event handlers is very rarely used today, due to its constraints, but it was the only way in the JavaScript early days:
<a href="#" onclick="alert('link clicked')">A link</a>

// DOM on-event handlers
// This is common when an object has at most one event handler, as there is no way to add multiple handlers in this case:
document.querySelector('a').onclick = () => {
    alert('link clicked')
}

// Using addEventListener
// Using addEventListener is the modern way. This method allows to register as many handlers as we need, and it's the one you will find mostly used in the wild:
document.querySelector('div').addEventListener('click', () => {
    //
})

// You can listen on window to intercept "global" events, like the usage of the keyboard, or you can listen to specific elements to check events happening specifically on them, like a mouse click on a button.



// ## CUSTOM EVENTS
// You can use the Event object which is provided by the browser, to create a new event, in this case the event named “start”:
const anEvent = new Event('start');

// Once you have the event, you can trigger the event using
document.dispatchEvent(anEvent)

// and when this happens, any event listener listening on that event “name” is triggered:
document.addEventListener('start', (event) => {     
    console.log('started!')
})



/*
    ## DOMContentLoaded EVENT
This is a very important event that we must listen for, to make sure **the DOM is ready** before interacting with it.

When the browser loads a Web page, once it finishes processing it, it fires the `DOMContentLoaded` event.

Sometimes you need to wait for this event before doing anything with the DOM, otherwise, your JavaScript would execute *before* the DOM is fully loaded in the browser memory. And things might be funny.

<html>

    <head>
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                alert('the DOM is fully loaded!')
            })
        </script>
    </head>

    <body>

    </body>

</html>

The `DOMContentLoaded` event fires when the DOM is fully loaded and you are sure you can interact with the DOM using JavaScript. 

Typically you have 2 places to add JavaScript, 
    in the head tag where it's loaded as soon as possible 
    and at the end of the body tag, where it's loaded after the browser finished loading all the rest of the page content. 
Using `DOMContentLoaded` you are sure things are fully loaded before touching anything or adding events.

It's like "tell me when you're done so I can add my JavaScript".
*/


//    ## EVENT OBJECT
// An event handler gets an Event object as the first parameter.
const link = document.getElementById('my-link')
link.addEventListener('click', event => {
  // link clicked
})

/* This object contains a lot of useful properties and methods, like:
    - `target`, the DOM element that originated the event
    - `type`, the type of event
    - `stopPropagation()`, called to stop propagating the event in the DOM
and more...

An event on a DOM element will be propagated to all its parent elements tree unless it's stopped.
<html>
  <body>
    <section>
      <a id="my-link" ...>

In this example a click event on the element defined with the `a` tag will propagate to `section` and then `body`.
You can stop the propagation by calling the `stopPropagation()` method of an Event, usually at the end of the event handler:
*/
const linkk = document.getElementById('my-link')
linkk.addEventListener('mousedown', event => {
  // process the event
  // ...

  event.stopPropagation()
})

// Each specific kind of event, like a mouse click, a touch event, or a keyboard event, implement an event that extends this base Event object.



/*
    ## MOUSE EVENT
When looking at mouse events we have the ability to interact with
    - `mousedown` the mouse button was pressed
    - `mouseup` the mouse button was released
    - `click` a click event
    - `dblclick` a double click event
    - `mousemove` when the mouse is moved over the element
and more...

Events overlap. When you track a click event, it's like tracking a mousedown followed by a mouseup event.
In the case of dblclick, click is also fired two times.

mousedown, mousemove and mouseup can be used in combination to track drag-and-drop events.

Be careful with mousemove, as it fires many times during the mouse movement. We need to apply throttling.

When inside an event handler we have access to lots of properties.

For example on a mouse event, we can check which mouse button was pressed by checking the `button` property of the event object:
*/
const linkkk = document.getElementById('my-link')
linkkk.addEventListener('mousedown', event => {
  // mouse button pressed
  console.log(event.button) //0=left, 2=right
})

/*
Here are all the properties we can use:
    - `altKey` true if alt key was pressed when the event was fired
    - `button` if any, the number of the button that was pressed when the mouse event was fired (usually 0 = main button, 1 = middle button, 2 = right button). Works on events caused by clicking the button (e.g. clicks)
    - `buttons` if any, a number indicating the button(s) pressed on any mouse event.
    - `clientX` / `clientY` the x and y coordinates of the mouse pointer relative to the browser window, regardless of scrolling
    - `ctrlKey` true if ctrl key was pressed when the event was fired
    - `metaKey` true if meta key was pressed when the event was fired
    - `movementX` / `movementY` the x and y coordinates of the mouse pointer relative to the position of the last mousemove event. Used to track the mouse velocity while moving it around
    - `region` used in the Canvas API
    - `relatedTarget` the secondary target for the event, for example when moving
    - `screenX` / `screenY` the x and y coordinates of the mouse pointer in the screen coordinates
    - `shiftKey` true if the shift key was pressed when the event was fired
*/


/*
    ## KEYBOARD EVENTS
There are 2 types of events when interacting with keyboard events:
    - `keydown` the keyboard key has been pressed
    - `keyup` the keyboard key has been released
keydown is also fired when the key repeats while the button stays pressed.

While you typically listen to mouse and touch events on a specific element, it's common to listen for keyboard events on the document object:
*/
document.addEventListener('keydown', event => {
    // key pressed
})

/* 
The parameter passed to the event listener is a KeyboardEvent.

This event object, in addition to the Event object properties offers us (among others) these unique properties:
    - `altKey` true if alt key was pressed when the event was fired
    - `code` the code of the key pressed, returned as a string
    - `ctrlKey` true if ctrl key was pressed when the event was fired
    - `key` the value of the key pressed, returned as a string
    - `locale` the keyboard locale value
    - `location` the location of the key on the keyboard
    - `metaKey` true if the meta key was pressed when the event was fired
    - `repeat` true if the key has been repeated (e.g. the key has not been released)
    - `shiftKey` true if the shift key was pressed when the event was fired
*/