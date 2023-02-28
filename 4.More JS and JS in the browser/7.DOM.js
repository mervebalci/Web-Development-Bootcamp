/*
    ## INTRODUCTION TO DOM
The DOM is the browser's internal representation of a web page.

When the browser retrieves your HTML from your server, the internal parser analyzes the structure of your code and creates a model of it.

Based on this model, the browser renders the page on the screen.

The DOM is language-agnostic, and the de-facto standard to access the DOM is by using JavaScript, since it's the only language that browsers can run.

With JavaScript, you can interact with the DOM to:
    - inspect the page structure
    - access the page metadata and headers
    - edit the CSS styling
    - attach or remove event listeners
    - edit any node on the page
    - change any node attribute
and much more.

## All the front-end frameworks are built on top of this.
Starting from the original ones like jQuery, then with React, Angular, and Vue...
They all use those browser features. Without those, they wouldn't exist as you would not be able to interact with a web page.

The main 2 objects provided by the DOM API, which you will interact with most, are DOCUMENT and WINDOW.



    ## WINDOW OBJECT
The `window` object represents the window that contains the DOM document.

Properties and methods of the `window` object can be called without referencing `window` explicitly because it represents the global object.
The property `window.document` can also be referenced using `document`. 

    * Properties
- `document` points to the `document` object, which is key to the DOM interactions you will perform.
- `history` gives access to the History API
- `location` gives access to the Location interface, from which you can determine the URL, the protocol, the hash, and other useful information.
- `localStorage` is a reference to the Web Storage API localStorage object
- `sessionStorage` is a reference to the Web Storage API sessionStorage object

    * Methods
- `alert()`: which you can use to display alert dialogs
- `postMessage()`: used by the Channel Messaging API
- `requestAnimationFrame()`: used to perform animations in a way that's both performant and easy on the CPU
- `setInterval()`: call a function every n milliseconds, until the interval is cleared with `clearInterval()`
- `clearInterval()`: clears an interval created with `setInterval()`
- `setTimeout()`: execute a function after n milliseconds
- `setImmediate()`: execute a function as soon as the browser is ready
- `addEventListener()`: add an event listener to the document
- `removeEventListener()`: remove an event listener from the document

Those are just a few of the things `window` gives you.
You can see everything by typing `window` in the DevTools console!!!


    ## DOCUMENT OBJECT
The document object represents the DOM loaded in a window.

Document
    |___ <html> root element
            |___ <head> element
            |___ <body> element


Document
    |___ <html> root element
            |___ <head> element
                    |___ <title> element
                            |___ "The page title" text node

Document
    |___ <html> root element
        |___ <body> element
                |___ <a> element
                        |___ "Link to sth" text node
                        |___ "href" attribute
                                |___ "http://google.com" attribute value


You can get the document title using document.title, and the URL using document.URL.
The referrer is available in document.referrer, the domain in document.domain.
- `document.documentElement`: the Document node
- `document.body`: the `body` Element node
- `document.head`: the `head` Element node

When you call these methods (document.body or document.head), you see HTML tags.
In fact, that's how the DevTools represent the object to you. In reality, they are objects.

You can also get a list of all the element nodes of a particular type, 
    like an HTMLCollection of all the links using `document.links`, 
    all the images using `document.images`, 
    and all the forms using `document.forms`.

The document cookies are accessible in `document.cookie`. The last modified date in `document.lastModified`.


    ## SELECTORS API
One big part of the DOM API is about working with the Selectors API, a set of methods that allow you to select a specific element in the DOM.

- `document.querySelector()` returns a single element, the first found
- `document.querySelectorAll()` returns all the elements, wrapped in a `NodeList` object.

These are examples of their use:

- `document.querySelector('#test')`
- `document.querySelectorAll('.my-class')`
- `document.querySelector('#test .my-class')`
- `document.querySelector('a:hover')`

A NodeList object is not exactly an array, but you can iterate it with `Array.forEach` or the `for..of` loop, like this:
*/
for (const item of document.querySelectorAll('.buttons')) {
    //...do something
}

/*
    ## TRAVERSING DOM
The DOM is a tree of elements, with the Document node at the root, which points to the `html` Element node, which in turn points to its child element nodes `head` and `body`, and so on.

From each of those elements, you can navigate the DOM structure and move to different **nodes**.

Every element has one single parent.
To get it, you can use the `parentNode` property of an element:
*/
const element = document.querySelector('#test')

element.parentNode

// To check if a Node has child nodes, use Node.hasChildNodes() which returns a boolean value.
element.hasChildNodes()
// true

// To access all the Element Nodes children of a node use Node.childNodes
element.childNodes


/*
    ## EDITING DOM
The DOM offers various methods to edit the nodes of the page and alter the document tree.

With
- `document.createElement()`: creates a new Element Node
- `document.createTextNode()`: creates a new Text Node
you can create new elements, and add them to the DOM elements you want, as children, by using document.appendChild():
*/
const div = document.createElement('div')
div.appendChild(document.createTextNode('Hello world!'))

document.querySelector('body').appendChild(div)

/*
- `first.removeChild(second)` removes the child node "second" from the node "first".
- `document.insertBefore(newNode, existingNode)` inserts "newNode" as a sibling of "existingNode", placing it before that in the DOM tree structure.
- `element.appendChild(newChild)` alters the tree under "element", adding a new child Node "newChild" to it, after all the other children.
- `element.replaceChild(newChild, existingChild)` alters the tree under "element", replacing "existingChild" with a new Node "newChild".
- `element.textContent = 'something'` changes the content of a Text node to "something".
And more...
*/