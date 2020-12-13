# DepressedHelpChat-frontend
This part is the front-end  repo of our project, the objective is to  make a bot that analyze and help people with sentimental troubles 


## How to Use
How to launch the app: 

it's free on production at (in french only sorry for that) :https://depressedhelpchat.herokuapp.com/

## Installation on local 
First create a directory where you can clone both project inside.

And you can download this repo for the front-end  but you should also downaload this one :https://github.com/kabene/DepressedHelpChat-backend

### Requirement
Azure account with cognitive service for [sentiment analysis]https://azure.microsoft.com/fr-fr/services/cognitive-services/text-analytics/
and insert your keys inside the DepressedHelpChat-backend/utils/authAzure.js
requirement:[NodeJs](https://nodejs.org/en/)

###Launching
first at the root of the backend repo do 
```bash 
npm install
npm start
```
then switch to the root of the front-end and do the same 

```bash 
npm install
npm start
```             

feel free to change reponses generator on  DepressedHelpChat-backend/routes/users.js

it should work if there's some trouble be free to mark an issue inside one of the 2 repo 
enjoy! 

##Contributors
Editors: kabene,anaHue,Pierre-cplt,SivixayC


