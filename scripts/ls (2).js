const addAllDataToLs = () => {
    if (!localStorage.getItem('cities'))
        localStorage.setItem('cities', JSON.stringify(cities))
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users))
    }
}
addAllDataToLs()

const getCurrent = () => {
    return JSON.parse(localStorage.getItem('currentUser'))
}
const getAsks = () => {
    return JSON.parse(localStorage.getItem('Asks'))
}
const setAsks = () => {
    let Asks = getAsks();
    if (!Asks) {
        Asks = [];
    }
    localStorage.setItem('Asks', JSON.stringify(Asks))
}
const updateAsks = (newAsk) => {
    let Asks = getAsks();
    if (!Asks) {
        Asks = [];
    }
    Asks.push(newAsk)
    localStorage.setItem('Asks', JSON.stringify(Asks))
}
const getMasseges = () => {
    return JSON.parse(localStorage.getItem('masseges'))
}

const setMasseges = () => {
    let masseges = getMasseges();
    if (!masseges) {
        masseges = [];
    }
    localStorage.setItem('masseges', JSON.stringify(masseges))
}
const updateMassege = (newAsk) => {
    let masseges = getMasseges();
    if (!masseges) {
        masseges = [];
    }
    masseges.push(newAsk)
    localStorage.setItem('masseges', JSON.stringify(masseges))
}
const getUsers = () => {
    return JSON.parse(localStorage.getItem('users'))
}
const updateCurrentUser = (currentUser) => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
}
const addUser = (newUser) => {
    const users = getUsers();
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
}
const updateAskings = (arr) => {
    localStorage.setItem('Asks', JSON.stringify(arr))
}
const updateUsers = (arr) => {
    localStorage.setItem('users', JSON.stringify(arr))
}
const getCities = () => {
    return JSON.parse(localStorage.getItem('cities'))
}
const addCity = (newCity) => {
    const cities = getCities();
    users.push(newCity)
    localStorage.setItem('cities', JSON.stringify(cities))
}
setAsks()
// const current1 =
// {
//     id: new Date().getTime() + "a" + Math.random() * 255,

//     fName: "רחלי",
//     lName: "כהן",
//     Phone: "050-1234567",
//     email: "or.cohen@example.com",
//     userName: "orcohen",
//     password: "12345678",
//     gender: "זכר",
//     dr_tr: 1,
//     num_places: 2,
//     prefer: "זכר",
//     safetyChair: true,
//     sizePagaz: "גדול",
//     doneTravels: 0,
//     waitTravelers: 0,
//     dateLogin: new Date(2026, 3, 4, 23, 49),
//     v: [{}]
// }
//  updateCurrentUser({})
//   localStorage.clear()
