function textcolor() //change color of text when user move mouse over to red
{
    var getthat = document.getElementsByClassName("dark"); //get the highlight id
    for (var i = 0; i < getthat.length; i++) {
        getthat[i].style.background.color = 'green';
    }
}

function makenormal() //change color of text when user move mouse out to normal 
{
    var getthat = document.getElementsByClassName("dark");
    for (var i = 0; i < getthat.length; i++) {
        getthat[i].style.color = 'black';
    }
}
let change = document.getElementsByClassName("dark");
change.addEventListener('mouseover', textcolor);
change.addEventListener('mouseout', makenormal);
var typed6 = new Typed('#ux', {
    strings: ['UX', 'UI', 'animation'],
    typeSpeed: 70,
    backSpeed: 10,
    loop: true
});
