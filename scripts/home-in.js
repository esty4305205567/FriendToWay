let out=document.querySelector('#out')
out.onclick=()=>{
  alert("יצאתם מהמערכת.")
  updateCurrentUser({})
  location.href="../home.html"
}
let hello_to=document.querySelector("#hello_to")
const search=new URLSearchParams(location.search)
const type=search.get("type")
let currentUser=getCurrent()
let numUsers=getUsers().length
let dashCounts=document.querySelectorAll(".count")
if(type=="regular")
{
    hello_to.innerText="שלום לך!\nברוך שובך!"
}
else if(type=="new"){
    hello_to.innerText="ניכר שהנך משתמש חדש במערכת.\nמאחלים לך הרבה הצלחה\nנקווה שתהנה מהמערכת שלנו...."
}
dashCounts[0].innerText=numUsers
dashCounts[1].innerText=currentUser.waitTravelers
dashCounts[2].innerText=currentUser.doneTravels
console.log(dashCounts[2].innerText=currentUser.doneTravels
);