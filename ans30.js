var userNames = ["admin", "user1", "user2", "user3"];
userNames.forEach(function (userName) {
    if (userName === "admin") {
        console.log("Assalaam O alikum, admin");
    }
    else {
        console.log("Assalaam O alikum ".concat(userName, ", Welcome back!"));
    }
});
