# Mod 3 Final Project - SPA - Guidelines

- Separate frontend and backend - each in its own repository/folder
-

## Frontend (HTML, CSS, JS)

- html ids and classes are typically used for css, not to store data
- Objection Orientation and Class refactor
- **Note class** with its constructor function and a render function (similar to what we were delegating to a helper render function in our index.js)
- **important** takeaway here is that the data our application logic depends on lives in the DOM itself and we must put it there somehow
- **App class** to handle higher level functionality such as attaching event listeners
- The _static_ keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. (similar to class methods vs instance methods in Ruby )
- because the edit buttons are dynamically added to the page we cannot put the event listeners on them directly. We have to put the listener on a static element, i.e. the parent ul, and delegate the listening down to the children
- **Adapter/API Class** - A class that assumes the responsibility to communicate with the API
- Our adapter class methods should all be returning a promise (since they are responsible for communicating/fetching from the API) so we can chain .then and manipulate our data responses
- Adapters have the advantage of being able to hide away some code/implementation details of the fetch, convert the response to JSON, error handling and etc

## Backend (RAILS API)

- Model : Notes
- Routes:
- namespaced under api and v1
- http://localhost:3000/api/v1/notes
- Remember to run rails db:create && rails db:migrate when working from a different machine and have PostgresQL running to spin up our API server / backend

## Expand Functionality - After Buildout of MVP

-
