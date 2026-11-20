const { plans } = require("./content.js");
const { account, subscriptionsController } = require("./PyaeSone_contentSubscription.js");
//1.add account, get account information
account.setUserId("Ng");
account.setName("Wilson Ng");
account.setEmail("wilson@example.com");
console.log(account.getUserId());
console.log(account.getName());
console.log(account.getEmail());
/////////////////////////////////////////////////////////
//2.print of all subscription
console.log("Total subscriptions: ",

    subscriptionsController.getNumOfSub()),

    subscriptionsController.getallSub();

////////////////////////////////////////////////////////
//3.print annual savings of selected plan 

let planName = "Standard";
console.log(
    "Annual Savings of " + planName + ": " +
    subscriptionsController.getPlans(planName, subscriptionsController.yearlySavings)
);
////////////////////////////////////////////////////////////
//4.check active suscription 
let index = 1;
if (index < subscriptionsController.getNumOfSub()) {
    subscriptionsController.getPlanStatus(index);
}
////////////////////////////////////////////////////////////
//5.check how many devices the user is streaming 
console.log(

    subscriptionsController.getDevices("Tan"), ("devices")
);
///////////////////////////////////////////////////////////
//6.get list ot users
subscriptionsController.getUsers();
