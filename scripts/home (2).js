let form = document.querySelector("form");
const main1 = document.querySelector('main')
form.onsubmit = (e) => {
    e.preventDefault();
    pop_up(main1, "תודה!", "fa-star", "לחזרה", "נציגנו יחזרו אליכם", false, "", "./index.html")
    form.reset()
}
let logA = document.querySelector("#logA")
showLogOut("home")
const current = getCurrent()
if (getCurrent() && Object.keys(getCurrent()).length > 0) {

    logA.href = "./pages/UserHome.html?type=regular"
}
