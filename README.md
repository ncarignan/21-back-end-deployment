![cf](https://i.imgur.com/7v5ASc8.png) Lab 21: Back-end Deployment
======

## Submission Instructions
* Continue from previous authorization labs.
* Submit on canvas a question and observation, how long you spent, and a link to your deployed application.

## Resources
* [Deploing NodeJS Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
* [Getting started with NodeJS on TravisCI](https://docs.travis-ci.com/user/languages/javascript-with-nodejs)

## Feature Tasks  
* Deploy the application built on lab 19 using Github/Heroku/Travis CI using the process illustrated in class.
** Use [mlab](https://elements.heroku.com/addons/mongolab) to add a MongoDB database to Heroku.
* Link your deployed apllication to AWS using Heroku's environment variables.

## travis.yml sample
Use the following .yml file as a starting point for your deployment. It sets up the addons required to use the libraries we have been using in class, and it sets up a node version supported by Heroku.

```yml
language: node_js
node_js:
  - '8.4.0'
services:
  - mongodb
addons:
  apt:
    sources:
      - ubuntu-toolchain-r-test
    packages:
      - gcc-4.8
      - g++-4.8
env:
  - CXX=g++-4.8
sudo: required
before_script: npm i
script:
  - npm test
```

## Documentation
Refactor the existing README.md to reflect changes done during deployment.
