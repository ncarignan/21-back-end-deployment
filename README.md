# Authentication

## auth-router

### POST
the POST request takes in a username, email, and password and sends it to the server on the '/signup' route. The server then creates an account for them with those parameters and generates a token for them to continue using the site with. The email and username must be unique. The password is hashed and thus is not stored raw in our db. a method exists to verify the password on login attempts against the hashed password. a method also exists that creates tokens when the user logs in again.

### GET
The GET request makes a login request to the server. if the hashed password sent matches the stored hashed password, then it creates a new token and sends it back to the user.

## profileRouter
All of the profile routes deal with publicly viewable profiles

### POST
the POST route passes through the bearerAuthMiddleware and receives a new profile object. if the attached token matches the account, then it creates a new profile tied to the account with a bio, avatar, first and lastname, and reference to the account it belongs to.

### GET
the get request passes through the bearerAuthMiddleware and requests a specific profile referencing that profiles id. it then sends the profile back to the client..

## gifRouter
All of the profile routes deal with publicly viewable profiles

### POST
the POST route passes through the bearerAuthMiddleware and receives a new profile object. if the attached token matches the account, then it creates a new gif tied to the account with a title, url, createdOn Date, and reference to the account it belongs to.

### GET
the get request passes through the bearerAuthMiddleware and requests a specific gif referencing that gifs id. it then sends the gif back to the client.

### DELETE
the delete request passes through the bearerAuthMiddleware and requests a specific gif referencing that gifs id. it then deletes the gif and sends a 204 status code back to the client.

## middleware
### Bearer Auth
 checks the headers, checks the token, decrypts token, checks the token against the user- promisifies the verification to persist the promisechain
### Basic Auth
checks for the username and password

## Models
### Account
A mongoose schema with a hashed password, email, username, and tokenseed all of which are required and Strings. It also has a created property that contains a timestamp.
### Gif
A mongoose schema with a title and url which are both required strings. It also has a createdOn property with a timestamp and an account property with a tie to the ObjectId of the account it belongs to.
### Profile
A mongoose schema with a bio, avatar, lastName, firstName all of wheich are Strings as well as an account property  with a tie to the ObjectId of the account it belongs to.
