//document.getElementById("lastMod").innerHTML = ("last Updated:"+ document.lastModified);
// this top js is tghe old one and i dont want to lose it . 



//new js
var myDate = new Date(document.lastModified);

console.log('toISOString', myDate.toISOString());

myNewDate = new Intl.DateTimeFormat(
            "de-AT",
            {year: "numeric", month: "numeric", day: "numeric"}
).format(myDate).replace(/\./g, '-');

console.log('Intl.DateTimeFormat', myNewDate);

document.querySelector('.one').innerHTML = myDate.toISOString();
document.querySelector('.two').innerHTML = myNewDate;