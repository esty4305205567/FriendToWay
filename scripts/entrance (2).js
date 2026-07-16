
const seePassword = document.querySelector("#seePassword")
const password = document.querySelector("#password1")
seePassword.onclick = () => {
    password.type = "text"
    timoutInput = setTimeout(() => {
        password.type = "password"
    }, 1200)
}
let errors = document.querySelector("#errors")
const log = document.querySelector("#log")

let loga = document.querySelector("#loga")
let form = document.querySelector("form")

form.onsubmit = (e) => {

    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    let allUsers = getUsers()
    const arr = [{ 1: 2, 2: 3, 3: 4 }]
    let index = allUsers.findIndex(user => user.userName == data.userName && user.password == data.password)
    if (index == -1) {
        form.reset()
        errors.innerText = "שם המשתמש ו" + "/" + "או הסיסמא שהזנת שגויים. נא נסה שנית."
    }
    else {

       
        updateCurrentUser(allUsers[index])


        location.href = "./UserHome.html" 

    }



}