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
