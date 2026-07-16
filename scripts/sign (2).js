
const reset = (o) => {
    o.style.color = "var(--gray)";

    o.style.borderBottom = "none";

}
const myusers=getUsers();
const main1 = document.querySelector("main")
const li = document.querySelectorAll("li")
const cover_to_form = document.querySelector("#cover-to-form")
let state1;
let fname = null;
let lname = null;
let phone = null;
let email = null;
let userName = null;
let password = null;
let gender = null;
let dr_tr = null;
let num_places = null;
let prefer = null;
let safetyChair = null;
let sizePagaz = null;
let doneTravels = 0;
let waitTravelers = 0;
li[0].onclick = () => personalDetails()
if (fname != null)
    li[2].onclick = () => okDetails();
const personalDetails = () => {
    cover_to_form.innerText = ""
    li.forEach(x => reset(x))
    li[0].style.color = "#f28f79"
    li[0].style.borderBottom = "var(--green) 2px solid"
    let form = document.createElement("form");
    form.className = "personal_details"
    let names = document.createElement("div")
    names.className = "row"
    form.appendChild(names)
    let Fname = document.createElement("div")
    Fname.className = "col"
    names.appendChild(Fname)
    let firstnamelable = document.createElement("label")
    firstnamelable.htmlFor = "first_name"
    firstnamelable.className = "required"
    firstnamelable.innerText = "שם פרטי"
    let firstnameinput = document.createElement("input")
    firstnameinput.id = "first_name"
    firstnameinput.required = "true"
    firstnameinput.type = "text"
    firstnameinput.placeholder = "שם פרטי"
    firstnameinput.name = "first_name"
    firstnameinput.value = fname;
    Fname.appendChild(firstnamelable)
    Fname.appendChild(firstnameinput)
    let Lname = document.createElement("div")
    Lname.className = "col"
    names.appendChild(Lname)
    let lastnamelable = document.createElement("label")
    lastnamelable.htmlFor = "last_name"
    lastnamelable.className = "required"
    lastnamelable.required = "true"
    lastnamelable.innerText = "שם משפחה"
    let lastnameinput = document.createElement("input")
    lastnameinput.id = "last_name"
    lastnameinput.type = "text"
    lastnameinput.name = "last_name"
    lastnameinput.value = lname
    lastnameinput.placeholder = "שם משפחה"
    lastnameinput.required = "true"
    Lname.appendChild(lastnamelable)
    Lname.appendChild(lastnameinput)
    let Email_Phone = document.createElement("div")
    Email_Phone.className = "row"
    form.appendChild(Email_Phone)
    let Phone = document.createElement("div")
    Phone.className = "col"
    Email_Phone.appendChild(Phone)
    let phone = document.createElement("label")
    phone.htmlFor = "phone"
    phone.className = "required"
    phone.innerText = "מספר טלפון"
    let phoneinput = document.createElement("input")
    phoneinput.id = "phone"
    phoneinput.type = "tel"
    phoneinput.name = "phone"
    phoneinput.minLength = "9"
    phoneinput.maxLength = "10"
    phoneinput.required = "true"
    phoneinput.placeholder = "05X-XXXXXXX"
    Phone.appendChild(phone)
    Phone.appendChild(phoneinput)
    let Email = document.createElement("div")
    Email.className = "col"
    Email_Phone.appendChild(Email)
    let emaillabel = document.createElement("label")
    emaillabel.htmlFor = "email"
    emaillabel.className = "required"
    emaillabel.innerText = "דוא" + "''" + "ל"
    let emailinput = document.createElement("input")
    emailinput.id = "email"
    emailinput.type = "email"
    emailinput.name = "email"
    emailinput.value = email
    emailinput.placeholder = "דוא" + "''" + "ל"
    emailinput.required = "true"
    Email.appendChild(emaillabel)
    Email.appendChild(emailinput)
    let Radios = document.createElement("div")
    Radios.className = "rowRadio"
    let Gender = document.createElement("div")
    Radios.appendChild(Gender)
    Gender.id = "son"
    let Male = document.createElement("div")
    Male.className = "radio"
    Gender.appendChild(Male)
    let malelabel = document.createElement("label")
    malelabel.htmlFor = "male"
    Gender.className = "required"
    malelabel.innerText = "זכר"
    let maleinput = document.createElement("input")
    maleinput.className = "gender"
    maleinput.type = "radio"
    maleinput.name = "gender"
    maleinput.value = "1"
    maleinput.required = "true"
    Male.appendChild(malelabel)
    Male.appendChild(maleinput)
    let Female = document.createElement("div")
    Female.className = "radio"
    Gender.appendChild(Female)
    let femalelabel = document.createElement("label")
    femalelabel.htmlFor = "female"
    femalelabel.innerText = "נקבה"
    let femaleinput = document.createElement("input")
    femaleinput.className = "gender"
    femaleinput.type = "radio"
    femaleinput.name = "gender"
    femaleinput.value = "2"
    femaleinput.required = "true"
    Female.appendChild(femalelabel)
    Female.appendChild(femaleinput)
    let User = document.createElement("div")
    Radios.appendChild(Gender)
    User.id = "choose_user"
    User.className = "required"
    let Driver = document.createElement("div")
    Driver.className = "radio"
    User.appendChild(Driver)
    let driverlable = document.createElement("label")
    driverlable.htmlFor = "driver"
    driverlable.innerText = "נהג"
    let driverinput = document.createElement("input")
    driverinput.className = "dr/tr"
    driverinput.type = "radio"
    driverinput.name = "dr_tr"
    driverinput.value = "1"
    driverinput.required = "true"
    Driver.appendChild(driverlable)
    Driver.appendChild(driverinput)
    let Traveler = document.createElement("div")
    Traveler.className = "radio"
    User.appendChild(Traveler)
    let travelerlable = document.createElement("label")
    travelerlable.htmlFor = "traveler"
    travelerlable.innerText = "נוסע"
    let travelerinput = document.createElement("input")
    travelerinput.className = "dr/tr"
    travelerinput.type = "radio"
    travelerinput.name = "dr_tr"
    travelerinput.value = "2"
    travelerinput.required = "true"
    Traveler.appendChild(travelerlable)
    Traveler.appendChild(travelerinput)
    Radios.appendChild(User)
    state1 = document.createElement("button")
    state1.className = "finish"
    state1.innerText = "המשך"
    let UserDetails = document.createElement("div")
    UserDetails.className = "row"
    form.appendChild(UserDetails)
    let UserName = document.createElement("div")
    UserName.className = "col"
    UserDetails.appendChild(UserName)
    let usernamelable = document.createElement("label")
    usernamelable.htmlFor = "username"
    usernamelable.className = "required"
    usernamelable.innerText = "שם משתמש"
    let usernameinput = document.createElement("input")
    usernameinput.id = "username"
    usernameinput.type = "text"
    usernameinput.placeholder = "שם משתמש"
    usernameinput.minLength = "3"
    usernameinput.name = "username"
    usernameinput.required = "true"
    usernameinput.value = userName
   
    
    UserName.appendChild(usernamelable)
    UserName.appendChild(usernameinput)
    usernameinput.onchange = () => {
        if(!/^[a-zA-Z0-9]\w{3,10}[a-zA-Z0-9]$/.test(usernameinput.value))
        {
            pop_up(main1,"שם משצמש אינו תקין","fa-error","חזרה","שם משתמש צריך להיות עם 5-12 תווים",false,"jbjj","./sign-in (2).html")
            usernameinput.value=""
        }
        if (myusers.filter(user => user.userName === usernameinput.value).length > 0) {
            pop_up(main1,"שם משתמש קיים במערכת","fa-triangle-exclamation","חזרה","אנא בחר שם משתמש אחר",false,"","./sign-in (2).html")
           usernameinput.reportValidity();
           usernameinput.value = ""
        }
    }
    let Password = document.createElement("div")
    Password.className = "col"
    UserDetails.appendChild(Password)
    let passwordlable = document.createElement("label")
    passwordlable.htmlFor = "password"
    passwordlable.className = "required"
    passwordlable.innerText = "סיסמא"
    let passwordinput = document.createElement("input")
    passwordinput.id = "password"
    passwordinput.type = "text"
    passwordinput.placeholder = "סיסמא"
    passwordinput.minLength = "3"
    passwordinput.required = "true"
    passwordinput.name = "password"
    passwordinput.value = password
    Password.appendChild(passwordlable)
    Password.appendChild(passwordinput)
    form.appendChild(Radios)
    cover_to_form.appendChild(form)
    form.appendChild(state1)
    form.onsubmit = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        fillPersonal(data)
        form.reset()
        if (dr_tr == 1)
            driverDetails()
        else {
            okDetails()
        }
    }
}
const fillPersonal = (data) => {
    const users = JSON.parse(localStorage.getItem("users"))

    fname = data.first_name;
    lname = data.last_name;
    phone = data.phone;
    email = data.email
    userName = data.username;
    password = data.password;
    
    if (users.filter(user => user.userName === userName && user.password === password).length > 0) {
        pop_up(main1,"שם משתמש או סיסמא קיימים במערכת","fa-triangle-exclamation","חזרה","אנא נסה שנית",false,"","./sign-in (2).html")
        location.reload()
    }
    gender = data.gender;
    dr_tr = data.dr_tr;
}
const fillCar = (data) => {
    num_places = data.places;
    prefer = data.prefer_to;
    safetyChair = data.chair;
    sizePagaz = data.pagaz;
}
const okDetails = () => {
    let newUser;
    cover_to_form.innerText = ""
    li.forEach(reset)
    li[2].style.color = "#f28f79"
    li[2].style.borderBottom = "var(--green) 2px solid"
    cover_to_form.style.color = "var(--yellow)"
    
    if (dr_tr == 1) {
        newUser = {
            id: new Date().getTime() + "a" + Math.random() * 255,
            fName: fname,
            lName: lname,
            Phone: phone,
            email: email,
            userName: userName,
            password: password,
            gender: gender,
            dr_tr: 1,
            num_places: num_places,
            prefer: prefer,
            safetyChair: safetyChair,
            sizePagaz: sizePagaz,
            doneTravels: 0,
            waitTravelers: 0,
            dateLogin: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate(),
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            }
        }
    }
    else {
        newUser = {
            id: new Date().getTime() + "a" + Math.random() * 255,

            fName: fname,
            lName: lname,
            Phone: phone,
            email: email,
            userName: userName,
            password: password,
            gender: gender,
            dr_tr: 2,
            doneTravels: 0,
            waitTravelers: 0,
            dateLogin: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate(),
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            }
        }
    }
    addUser(newUser)
    updateCurrentUser(newUser)
    let thank = document.createElement("h1")
    thank.innerText = fname + " " + lname + "\n"
    thank.innerText += "\nתודה שהתחברת לחבר לדרך!"
    let connection = document.createElement("h3")
    connection.innerText = "נשמח להיות בקשר:)"
    thank.style.color = "var(--yellow)"
    connection.style.color = "var(--yellow)"
    let details = document.createElement("p")
    details.innerText = ``
    let continue1 = document.createElement("button")
    continue1.className = "finish"
    continue1.innerText = "לאזור האישי"
    continue1.addEventListener('click', () => location.href = "./UserHome.html?type=new")
    cover_to_form.appendChild(thank)
    cover_to_form.appendChild(connection)
    cover_to_form.appendChild(details)
    cover_to_form.appendChild(continue1)
    fname = null;
    lname = null;
    phone = null;
    email = null;
    userName = null;
    password = null;
    gender = null;
    dr_tr = null;
}
li[1].onclick = () => driverDetails();
const driverDetails = () => {
    cover_to_form.innerText = ""
    li.forEach(x => reset(x))
    li[1].innerText = "פרטי רכב"
    li[1].style.color = "#f28f79"
    li[1].style.borderBottom = "var(--green) 2px solid"
    let form = document.createElement("form");
    form.className = "personal_details"
    let places_prefer = document.createElement("div")
    places_prefer.className = "row"
    form.appendChild(places_prefer)
    let numPlaces = document.createElement("div")
    numPlaces.className = "col"
    places_prefer.appendChild(numPlaces)
    let placeslable = document.createElement("label")
    placeslable.htmlFor = "places"
    placeslable.className = "required"
    placeslable.innerText = "מספר מקומות"
    let placesinput = document.createElement("input")
    placesinput.id = "places"
    placesinput.required = "true"
    placesinput.type = "number"
    placesinput.placeholder = "1"
    placesinput.name = "places"
    placesinput.value = fname;
    numPlaces.appendChild(placeslable)
    numPlaces.appendChild(placesinput)
    let preferTo = document.createElement("div")
    preferTo.className = "col"
    places_prefer.appendChild(preferTo)
    let preferLable = document.createElement("label")
    preferLable.htmlFor = "prefer_to"
    preferLable.className = "required"
    preferLable.required = "true"
    preferLable.innerText = "עדיפות ל"
    let preferInput = document.createElement("select")
    preferInput.id = "prefer_to"
    preferInput.name = "prefer_to"
    preferInput.required = "true"
    let zachar = document.createElement("option")
    zachar.innerText = "זכר"
    zachar.value = "זכר"
    let nekeva = document.createElement("option")
    nekeva.innerText = "נקבה"
    nekeva.value = "נקבה"
    let noMind = document.createElement("option")
    noMind.innerText = "לא משנה"
    noMind.value = "לא משנה"
    preferInput.appendChild(noMind)
    preferInput.appendChild(zachar)
    preferInput.appendChild(nekeva)
    preferTo.appendChild(preferLable)
    preferTo.appendChild(preferInput)
    let chair_pagaz = document.createElement("div")
    chair_pagaz.className = "row"
    form.appendChild(chair_pagaz)
    let Chair = document.createElement("div")
    Chair.className = "col"
    chair_pagaz.appendChild(Chair)
    let chairLable = document.createElement("label")
    chairLable.htmlFor = "chair"
    chairLable.className = "required"
    chairLable.required = "true"
    chairLable.innerText = "יש כסא בטיחות?"
    let chairInput = document.createElement("select")
    chairInput.id = "chair"
    chairInput.name = "chair"
    chairInput.required = "true"
    let yes = document.createElement("option")
    yes.innerText = "כן"
    yes.value = "כן"
    let no = document.createElement("option")
    no.innerText = "לא"
    no.value = "לא"
    chairInput.appendChild(yes)
    chairInput.appendChild(no)
    Chair.appendChild(chairLable)
    Chair.appendChild(chairInput)
    let Pagaz = document.createElement("div")
    Pagaz.className = "col"
    chair_pagaz.appendChild(Pagaz)
    let pagazLable = document.createElement("label")
    pagazLable.htmlFor = "pagaz"
    pagazLable.className = "required"
    pagazLable.required = "true"
    pagazLable.innerText = "גודל פגז"
    let pagazInput = document.createElement("select")
    pagazInput.id = "pagaz"
    pagazInput.name = "pagaz"
    pagazInput.required = "true"
    let big = document.createElement("option")
    big.innerText = "גדול"
    big.value = "גדול"
    let small = document.createElement("option")
    small.innerText = "קטן"
    small.value = "קטן"
    pagazInput.appendChild(big)
    pagazInput.appendChild(small)
    Pagaz.appendChild(pagazLable)
    Pagaz.appendChild(pagazInput)
    state1 = document.createElement("button")
    state1.className = "finish"
    state1.innerText = "המשך"
    form.appendChild(state1)
    cover_to_form.appendChild(form)
    form.onsubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        fillCar(data)
        form.reset()
        okDetails()
    }
}
personalDetails()
