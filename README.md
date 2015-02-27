# ratemycoop.io

[![Deployment status from dploy.io](https://ratemycoop-io.dploy.io/badge/02267417976534/22375.svg)](http://dploy.io)


## Client setup
All of the client stuff is in the `client` directory
Assuming you have `node`, `bower`, `grunt` and `grunt-cli` installed
```
cd client/
bower install
npm install
bower serve
```
On sucess, bower should open up your broswer to the default `:9000` port. 

## Backend setup
A lot of it is abstracted, so just run:
```
node server/server.js
```
The result is an in memory local databse with limited data on port `:3000`.
Head to `http://localhost:3000/explorer` to see what's up. 
