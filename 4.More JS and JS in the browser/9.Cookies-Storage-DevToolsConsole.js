/*
    ##  COOKIES
Cookies are a fundamental part of the Web, as they allow sessions and in general to recognize the users during the navigation.

By using Cookies we can exchange information between the server and the browser to provide a way to customize a user session,
and for servers to recognize the user between requests.

HTTP is stateless, which means all request origins to a server are exactly the same
and a server cannot determine if a request comes from a client that already did a request before, or if it's a new one.

Cookies are sent by the browser to the server when an HTTP request starts,
and they are sent back from the server to the browser.

Cookies have some limits and restrictions to prevent abuse:

    - Cookies can only store 4KB of data
    - Cookies are private to the domain. A site can only read the cookies it set, not another domain's cookies

Cookies can be set or read server side, or client side.

On the client side, in the browser, cookies are exposed by the document object as document.cookie
*/

// The simplest example to set a cookie is:
document.cookie = "name=Efes"
// This will add a new cookie to the existing ones (it does not overwrite existing cookies)

/*
The cookie value should be url-encoded with encodeURIComponent(),
to make sure it does not contain any whitespace, comma, or semicolon which are not valid in cookie values.

If you don't set an expiration date, the cookie will expire when the browser is closed.
To prevent this, add an expiration date, expressed in the UTC format (Fri, 15 May 2015 17:04:05 UTC)
*/
document.cookie = "name=Efes; expires=Fri, 15 May 2015 17:04:05 UTC"

// A simple JavaScript snippet to set a cookie that expires in 24 hours is:
const date = new Date()
date.setHours(date.getHours() + 24)
document.cookie = "name=Efes; expires=" + date.toUTCString()

// Alternatively you can use the max-age parameter to set an expiration expressed in the number of seconds:
document.cookie = "name=Efes; max-age=3600"         // expires in 60 min
document.cookie = "name=Efes; max-age=31536000"     // expires in 1 year

// Adding the Secure parameter makes sure the cookie can only be transmitted securely over HTTPS, and it will not be sent over unencrypted HTTP connections:
document.cookie = "name=Efes; Secure;"
// Note that this does not make cookies secure in any way - always avoid adding sensitive information to cookies

// One useful parameter is HttpOnly, which makes cookies inaccessible via the document.cookie API, so they are only editable by the server:
document.cookie = "name=Efes; Secure; HttpOnly"

// To update the value of a cookie, just assign a new value to the cookie name:
document.cookie = "name=Boncuk"

// Similar to updating the value, to update the expiration date, reassign the value with a new expires or max-age property:
document.cookie = "name=Boncuk; max-age=31536000"       // expires in 1 year

// Just remember to also add any additional parameters you added in the first place, like path or domain.


// !!!!! To delete a cookie, you have to unset its value and pass a date in the past:
document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'


// To access the cookies, you need to look up the document.cookie property:
const cookie = document.cookie

// This will return a string with all the cookies set for the page, semicolon-separated:
'name=Efes; age=4; toy=catnipmouse'


// How do you get the value of a specific cookie? There's no built-in way to do so.
// This function will return the value of a cookie if present:
const getCookieValue = name => {
    const theCookie = document.cookie.split(';').filter(item => {
        if (item.includes(name + '=')) return true
    })
    if (theCookie.length === 0) { return false }
  
    return theCookie[0].split('=')[1]
}
  
getCookieValue('my-cookie-name')


// This function, instead, just checks if a cookie is set:
const checkCookieExists = (name) => {
    if (document.cookie.split(';').filter(item => {
        if (item.includes(name + '=')) return true
    }).length) { return true } else { return false }
}
  
checkCookieExists('my-cookie-name')





/*
    ##  STORAGE IN THE BROWSER
The Web Storage API provides a way to store data in the browser.
It defines two storage mechanisms that are very important: Session Storage and Local Storage, part of the set of storage options available in browsers.
Both provide a private area for your data. 
Any data you store in there cannot be accessed by other websites.
Both storage methods are only accessible in the browser.
Data is not sent to the server on each HTTP request like cookies do.
Both Local and Session Storage are available on the `window` object, so you can access them by referencing `sessionStorage` and `localStorage`.
Their set of properties and methods is exactly the same.


    * The difference between between sessionStorage and localStorage:
Session Storage maintains the data stored in it just for the duration of the page session.
If multiple windows or tabs visit the same site, they will have two different Session Storage instances.
When a tab/window is closed, the Session Storage for that particular tab/window is cleared.

Session storage is meant to allow the scenario of handling different processes happening on the same site independently, 
something not possible with cookies for example, which are shared in all sessions.

Local Storage instead persists the data until it's explicitly removed, either by you, the site creator or by the user.
It's never cleaned up automatically, and it's shared in all the sessions that access a site.
*/


//    * Methods that can be used on both sessionStorage and localStorage:

// setItem(key, value)
// setItem() adds an item to the storage. Accepts a string as a key, and a string as a value:
localStorage.setItem("username", "efes")
localStorage.setItem("age", "4")

// If you pass any value that's not a string, it will be converted to a string:
localStorage.setItem("test", 123)               //stored as the '123' string
localStorage.setItem("test", { test: 1 })       //stored as "[object Object]"


// getItem(key)
// getItem() is the way to retrieve a string value from the storage, by using the key string that was used to store it:
localStorage.getItem("username")        // 'efes'
localStorage.getItem("age")             // '4'


// removeItem(key)
// removeItem() removes the item identified by key from the storage, returning nothing (an undefined value):
localStorage.removeItem("age")


/*
`key(n)`
Every item you store has an index number.

It might appear the number is consecutive, so the first time you use setItem(),
that item can be referenced using key(0), the next with key(1), and so on, but it's not.
MDN says "The order of keys is user-agent defined, so you should not rely on it".
If you reference a number that does not point to a storage item, it returns `null`.
*/


// clear()
// clear() removes everything from the storage object you are manipulating:
localStorage.setItem("a", "a")
localStorage.setItem("b", "b")
localStorage.length     //2
localStorage.clear()
localStorage.length     //0


// Through the Storage API, you can store a lot more data than you would be able with cookies.
// The amount of storage available on the Web might differ by storage type (local or session), browser, and device type.