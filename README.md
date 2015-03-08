[![Cooper, your co-op companion!](https://ratemycoop.io/logos/cooper_cat.svg)](https://ratemycoop.io/)

# ratemycoop.io

Rate My Co-op is a new service built to allow students to look up information about companies. Search for (and add more) companies, read reviews, and add your own experiences from which others can benefit.

## Status

![Deployment status from dploy.io](https://ratemycoop-io.dploy.io/badge/02267417976534/22375.svg)

### Technology Stack

The application is a fairly standard stack consisting of Node.js, loopback.io, AngularJS, and Semantic UI.

#### Contributing

We use the `develop` branching model. In order to submit pull requests, fork this repository and branch off of `develop` with a descriptive branch name such as `ui-bugFix/loginForm`. Finally, submit a pull request against the `develop` branch of this repository. Depending on how long it takes to get to the pull request, we may ask you to rebase, but we'll try to incorporate your changes as soon as possible!

##### Supported Development Environments

###### OS X 10.10

1. Start by installing [homebrew](http://brew.sh/) (following *all* instructions).
2. Next, execute `brew install node`.
3. In the root of the repository directory, execute `npm install`.
4. If you're only working on the backend, you can simply run `node server/server.js`.
5. For frontend development, execute `npm install -g bower grunt-cli`.
6. Change into the `client/` directory and execute `npm install` again followed by `npm install grunt`.
7. Finally, execute `grunt serve` to start the local development server.

###### Ubuntu

[tbd]

###### Fedora

[tbd]

###### Arch Linux

[tbd]

##### Client Setup

All of the client stuff is in the `client` directory
Assuming you have `node`, `bower`, `grunt` and `grunt-cli` installed

```
cd client/
npm install
bower install
grunt serve
```

On sucess, bower should open up your broswer to the default `:9000` port. 

##### Backend Setup

A lot of it is abstracted, so just run:

```
npm install
node server/server.js
```

The result is an in memory local database with limited initial test data on port `:3000`.
Head to `http://localhost:3000/explorer` to see and interact with the API explorer. 

##### Reporting Issues

Include a succinct title for your issue that gives a quick summary about the problem. It is extremely helpful if you include steps to reproduce the problem in the description (including environment information such as browser version).

#### Troubleshooting

##### Grunt serve fails with an infinite loop on the watch command:

* Known Issue on Ubuntu

  * Fix: Increase the number of files allowed to be watched by a user

    * `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
