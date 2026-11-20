# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
1.chatgpt assisted me in creating dummy data inside dbservice.js

2. https://www.w3schools.com/ : I look up javascript functions on this website

3.I created node module for content subscription manager in entertainment industry, reference website is Disney plus , https://www.disneyplus.com/

4. 
4.1. install nodejs> open terminal inside vscode > make sure system displays working directory in terminal , if not system will display "cannot find module" 
Option2: using nodemon: in terminal, type> npm install -g nodemon >run app by typing nodemon app.js
 
4.2. content.js is databse file, contentSubscription.js is my node module file, I put app.js also to see sample of my outputs 

4.3. Put the following line of code at the first line of your app.js file
const { account, subscriptionsController } = require("./contentSubscription.js");

5. I have 6 javascript functions inside node module

5.1.  Register an account and display account particular 
step1. call "account" object and use three set methods to add new account
step2. print output of created account by calling account.get methods

5.2. get all subscriptions
step1. print a title "Total subscription: "
step2. call "subscriptionsController" objected exported at the start of the file, call getallsub method and getNumOfSub get method to get number of objects inside  subscriptions array

step3. use for loop to print out each object
step4. inside console.log, print string "Subscription" followed by index+1 to display number in front of each object and call object subscriptionsController.get method to return each suscription based on index value (index is input variable)

5.3. print annual savings of selected plan ( in my dbservice, I havve two plans)

step1. define a variable using let , value to pass in is "Standard" OR "Premium" 

step2. print "Annual Savings of" + call the above variable + call subscriptionsController object .getPlans method with 2 parameters : planName (the value u key in) and calculate (call the seperate function, reference from week1: javascript crash course> function as values). 

5.4 check whether a user's subscription is expired or not by passing in object's index inside suscription array

step1. declare "index" variable , value to pass in is int e.g 0,1,2,3

step2. use if clause
condition: if index var is less than number of objects inside subscription array, call getPlanStatus method which checked if currentDate is bigger than expiryDate based on passed in index value . this function print one kine with username and subscription status

5.5. check how many devices the user is streaming
step1. print the output  by calling getDevices method , pass in userId value . optional: can put ,("devices") after calling method so that output will be meaningful 1/2 devices instead of 1/2 number alone

5.6. get list ot users
step1. call getUsers method inside subscriptionsController object , output will be list of usernames 