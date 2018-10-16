// javascript stuff

// button I'm ok
function imGood (){
    alert("sends alert to whoever is watching 'I'm doing just Fine today!'")
    // if they have been sent a notification - it will erase notification;
    var x=document.getElementById("alertMe");
    if (x.style.display==="block") {
        x.style.display="none";
    };

};


// button Need help
function helpMe () {
    alert("send an alert to whoever is watching, 'please call for Help'")
    // add questions
    // do you want me to call 911?
    // Family member needs to call?
    
};

function checkUp () {

    var x = document.getElementById("alertMe");
    if (x.style.display==="block"){
        x.style.display="none";
        // x.style.border="2pt solid black"
    } else {
        x.style.display="block";
    };
    alert("send an alert to user 'Are you OK?' ");

};


function addNew () {
    alert ("This will allow you to add another person to your watchlist");
}


function deleteMe () {
    alert("delete someone from your watchlist, will show a list of people");
};

