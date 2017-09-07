var friends = ["Rick","Kenneth","Sebastian","Razvan","Matt"];

document.addEventListener("DOMContentLoaded", function(){
var button = document.getElementById("button");
button.addEventListener("click",sing);
})

function sing(){
for (var i = 0; i < friends.length; i++) {
    var friend = friends[i];
    console.log(friend.toUpperCase() + ':');
    for (var j = 99; j > 0; j--) {
        if (j > 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code, ' + friend + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file.');
        } else if (j === 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code, ' + friend + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file.');
        } else {
            console.log(j + ' line of code in the file, ' + j + ' line of code, ' + friend + ' strikes one out, clears it all out, no more lines of code in the file.');
        }
    }
}
}