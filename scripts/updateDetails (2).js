document.addEventListener('DOMContentLoaded', () => {
    showLogOut("update");
});
const currentUser = JSON.parse(localStorage.getItem('currentUser'));


const driver_form = document.querySelector('#driver_form')//#driver_form
const form = document.querySelector('form');
const first_name = document.querySelector('#first_name')
const last_name = document.querySelector('#last_name')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const places = document.querySelector('#places')
const pagaz = document.querySelector('#pagaz')
const chair = document.querySelector('#chair')
const prefer_to = document.querySelector('#prefer_to')

const driverFields = [places, pagaz, chair, prefer_to].filter(Boolean);

driver_form.style.display = 'none'
driverFields.forEach(field => field.disabled = true)
if (currentUser.dr_tr === 1) {
  driver_form.style.display = 'block'
  driverFields.forEach(field => field.disabled = false)
  if (places) places.value = currentUser.num_places || ''
  if (pagaz) pagaz.value = currentUser.sizePagaz || ''
  if (chair) chair.value = currentUser.safetyChair || ''
  if (prefer_to) prefer_to.value = currentUser.prefer || ''
}

if (first_name) first_name.value = currentUser.fName || ''
if (last_name) last_name.value = currentUser.lName || ''
if (phone) phone.value = currentUser.Phone || ''
if (email) email.value = currentUser.email || ''

form.onsubmit = (e) => {
  e.preventDefault()
  const users = getUsers() || []
  const index = users.findIndex(user => user.userName === currentUser.userName || user.email === currentUser.email)


  if (index !== -1) {
    users.splice(index, 1)
    updateUsers(users)

    if (currentUser.dr_tr === 1 && places && pagaz && chair && prefer_to) {
      currentUser.num_places = places.value
      currentUser.sizePagaz = pagaz.value
      currentUser.safetyChair = chair.value
      currentUser.prefer = prefer_to.value
    }

    currentUser.fName = first_name.value
    currentUser.lName = last_name.value
    currentUser.Phone = phone.value
    currentUser.email = email.value

    addUser(currentUser)
    updateCurrentUser(currentUser)

    alert('העדכון בוצע בהצלחה!')

  } else {
    alert('אופססס...\nהעדכון נכשל. נסו מאוחר יותר')
  }
}


