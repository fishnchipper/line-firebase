![version](https://badgen.net/badge/version/v0.1.1/orange)  ![AppVeyor](https://img.shields.io/appveyor/build/gam4it/line-firebase)


# line-firebase

Line is a NodeJS + Express App shell which can be used for web front application or microservice with RESTful API interfaces. 


## User Authentication
- Google Firebase admin SDK is used but can be replaced by any 3rd-party authentication service or your own implmentation.

- firebase server key is required. Create your one from firebase and then add `firebase-serverkey.json` containing serverkey json to /line_modules/firebase.


# Where to start


1. Install dependent packages
```
$ npm install
```

2. Run the app
```
$ node index.js
==> line - (v0.1.0) https://localhost:65000
```

3. Open a webbrowser and connect https://localhost:65000




# How to duplicate this repository for your project
- see https://help.github.com/en/articles/duplicating-a-repository

