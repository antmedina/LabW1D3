//Created variables for Loops
var friends = ["Rick","Kenneth","Sebastian","Razvan","Matt"];
//Grabbed button to execute "sing" function
document.addEventListener("DOMContentLoaded", function(){
var button = document.getElementById("button");
button.addEventListener("click",sing);
})
//Sing execution
function sing(){
for (var i = 0; i < friends.length; i++) {
    var fDiv = document.createElement("div");
    fDiv.className="friend";
    var friendSinging = document.createElement("h3");
    fDiv.appendChild(friendSinging);
    var singingFriend = document.createTextNode(friends[i]);
    friendSinging.appendChild(singingFriend);
    for (var j = 3; j > 0; j--) {
        var para=document.createElement("p");
        fDiv.appendChild(para);
        if (j > 2) {
            var song=document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file.');
        } else if (j === 2) {
            var song=document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file.');
        } else {
            var song=document.createTextNode(j + ' line of code in the file, ' + j + ' line of code, ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.');
        }
        fDiv.appendChild(para);para.appendChild(song);
        document.body.appendChild(fDiv);
    }
}
}