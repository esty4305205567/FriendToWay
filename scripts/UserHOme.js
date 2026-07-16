showLogOut("userhome")

let logout_card = document.querySelector('#logout-card')
logout_card.onclick = () => {


  alert("יצאתם מהמערכת.")
  updateCurrentUser({})
  location.href = "../home.html"
}
let hello_to = document.querySelector("#hello_to")
const a=[]

const search = new URLSearchParams(location.search)
const type = search.get("type")
let currentUser = getCurrent()
const mass = getMasseges()?.forEach(x => x.from == currentUser.id || x.to == currentUser.from)
let numUsers = getUsers().length
let dashCounts = document.querySelectorAll(".count")
let phonetext = document.querySelector("#phonetext")
let mailtext = document.querySelector("#mailtext")
let badge = document.querySelector(".badge")
let book_ride=document.querySelector(".book-ride")
currentUser.dr_tr==1?book_ride.style.display="none":book_ride.style.display="block"
if (!mass||!Object.keys(mass).length>0)
  badge.innerText = "0" + " חדשות"
else{
    badge.innerText = mass.length + " חדשות"
}
mailtext.innerText = currentUser.email
phonetext.innerText = currentUser.Phone

if (type == "new") {
  hello_to.innerText = "שלום לך, " 
  hello_to.innerText+=currentUser.dr_tr==1?" נהג":' נוסע'
  hello_to.innerText+=" יקר "+ currentUser.fName + " " + currentUser.lName
  hello_to.innerText += "\nניכר כי הינך משתמש חדש במערכת! "
}
else  {
hello_to.innerText = "שלום לך, " 
  hello_to.innerText+=currentUser.dr_tr==1?" נהג":' נוסע'
  hello_to.innerText+=" יקר "+ currentUser.fName + " " + currentUser.lName
    hello_to.innerText += "\nברוך שובך!"
}
