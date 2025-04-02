let userRole = prompt("Please enter your user type")
let authorization;
let dieticianAccess;

// if (userRole !== null) {
if (userRole === "Employee") {
    authorization = "Access to Dietary Services granted";
    dieticianAccess = "Access to Dietician is available.";
} else if (userRole === "Enrolled Member") {
    authorization = "Access to Dietary Services is available";
    dieticianAccess = "Access to Dietician is available.";
} else if (userRole === "Subscriber") {
    authorization = "Partial access to Dietary Services only";
    dieticianAccess = "Access to Dietician is un-available.";
} else {
    authorization = "User must enroll or subscribe first to use this service"
}
console.log("Access Level:", authorization);
console.log("Access to Dietician:", dieticianAccess);