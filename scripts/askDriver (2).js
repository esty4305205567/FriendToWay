showLogOut("askDriver")

let cityOp = document.querySelector("select")//city
cities.forEach(city => {
    let option = document.createElement("option")
    option.value = city
    option.innerText = city
    cityOp.appendChild(option)
})
let other = document.querySelector('#other')
let hospitalsAll = document.querySelector('#hospitals')
let hospitals = document.querySelectorAll(".hospital");
let search = document.querySelector("#search")
let noFound = document.querySelector("#noFound")
let form = document.querySelector('form')
const selectHospital = (e) => {
    let chosen = e.target
    hospitals.forEach(hospital => {
        hospital.classList.remove('selected')
        chosen.classList.add('selected')
        hospital.removeEventListener('click', selectHospital)
        hospital.style.border = "none"
        chosen.style.border = "2px solid #000"


    }
    )
    search.value = chosen.innerText
    let input = document.createElement('input')
    search.readOnly = 'true'
}
hospitals.forEach(hospital => {
    hospital.addEventListener("click", selectHospital)
})

search.oninput = () => {
    other.style.display = "none"
    let value = search.value
    let count = 0;
    hospitals.forEach(hospital => {
        if (hospital.innerText.includes(value)) {
            hospital.style.display = "block";
            count++;
            noFound.innerText = ''
        } else {
            hospital.style.display = "none";
        }
    });
    if (count === 0) {
        noFound.style.display = "block"
        noFound.innerText = 'לא נמצאו תוצאות המתאימות לחיפוש'

    }
}
other.onclick = () => {
    let input = document.createElement('input')
    input.className = "addH"
    let div = document.createElement('div')
    div.classList.add('hospital')
    let nameH = document.createElement('h5')
    div.appendChild(input)
    input.oninput = () => {
        nameH.innerText = input.value;
    }
    div.addEventListener("click", selectHospital)


    div.appendChild(nameH)
    hospitalsAll.appendChild(div)

}
form.onsubmit = (e) => {
    let current = getCurrent()
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    let obj = {
        namePassengers:data.name,
        phonePassengers: current.Phone,
        from: data.city,
        to: data.to,
        passengers: data.numPeople,
        date: new Date(Date.now()),
        status: "wait",
        gender: data.gender,
        sizePackage: data.packageSize,
        note: data.information,
        idDriver: null,
        idAsk:current.id


    }
    updateAsks(obj)
    let obj2 = {from: current.id, to: null, content: data.information, nameFrom: current.fName, date: new Date().getTime()}
    updateMassege(obj2)
    form.reset()
    location.href="./UserHome.html"
}