const { users, plans, subscriptions, activeStreams } = require("./content.js");
//1. Register a user 

let account = {
    userId: "", name: "", email: "",
    getUserId() { return this.userId },
    getName() { return this.name },
    getEmail() { return this.email },
    setUserId(userId) { this.userId = userId; },
    setName(name) { this.name = name; },
    setEmail(email) { this.email = email; }
}
////////////////////////////////////////////////////////////
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate);

let subscriptionsController = {

    subscriptions: subscriptions,
    devices: activeStreams,
    users: users,

    getSub(index) {
        return this.subscriptions[index];

    },

    //2 print of all subscription
    getallSub() {
        for (let index = 0; index < subscriptionsController.getNumOfSub(); index++) {
            console.log("Subscription ", index + 1, ":",
                subscriptionsController.getSub(index));
        }
    },

    getNumOfSub() {
        return this.subscriptions.length;
    },

    ////////////////////////////////////////////////////////////
    //3 print annual savings of selected plan
    getPlans(planName, calculate) {
        let plan = plans.find(p => p.planName === planName);
        return calculate(plan);
    },

    yearlySavings(plan) {
        return Number(
            (plan.monthlyPrice * 12 - plan.annualPrice).toFixed(2)
        );
    },
    ////////////////////////////////////////////////////////////
    //4.check active suscription
    getPlanStatus(index) {
        (subscriptions[index].expiryDate < currentDate)
            ? console.log("User " + subscriptions[index].userId + "'s plan has expired")
            : console.log("User " + subscriptions[index].userId + "'s plan will be expired on " + subscriptions[index].expiryDate);
    },
    ////////////////////////////////////////////////////////////
    //5.check how many devices the user is streaming
    getDevices(username) {
        let count = 0;

        for (let i = 0; i < activeStreams.length; i++) {
            if (activeStreams[i].userId === username) {
                count++;
            }
        }
        console.log("User " + username + " has active streams:")
        return count;

    },
    ////////////////////////////////////////////////////////////
    //6.get list ot users
    getUsers() {
        console.log("List of users in our platform: ")
        let count = 0;
        for (let i = 0; i < users.length; i++) {

            console.log(i + 1 + "." + users[i].name)
        }

    }

}
module.exports = {
    account,
    subscriptionsController,

};