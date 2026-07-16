let out = document.querySelector('#out')
let itnatek = document.querySelector("#itnatek")
const main = document.querySelector('main')
const end_pop_up = (regular, cancel, cancelButton, hrefOk, overlay) => {
    regular.onclick = () => {
        updateCurrentUser({})
        location.href = hrefOk
    }
    if (cancel) {
        cancelButton.onclick = () => {
            main.removeChild(overlay)
        }
    }
}
const pop_up = (body, title, icon, confirmButton, text, cancelButton, textCancel, hrefok) => {

    let overlay = document.createElement('div');
    overlay.classList.add("overlay")
    overlay.id = "overlay-modal-generic"
    overlay.classList.add("open")

    let modal = document.createElement('div');
    modal.className = "gp-modal"
    modal.id = "modal-generic"
    let top = document.createElement('div');
    top.className = "modal-top-bar"
    let close = document.createElement('button')
    close.className = "close-x"
    close.innerText = "X"
    let icon1 = document.createElement('div');
    icon1.className = "icon-badge"
    let i = document.createElement('i')
    i.classList.add("fa-solid")
    i.classList.add(icon)
    icon1.append(i)
    let h2 = document.createElement('h2');
    h2.innerText = title
    let p = document.createElement('p');
    p.innerText = text
    let actions = document.createElement('div');
    actions.className = "modal-actions"
    let primary = document.createElement('button')
    primary.classList.add("btn-primary")
    primary.innerText = confirmButton
    primary.classList.add("btn")
    actions.appendChild(primary)
    let ghost = document.createElement('button')
    if (cancelButton) {
        ghost.classList.add("btn-ghost")
        ghost.innerText = textCancel
        ghost.classList.add("btn")
        actions.appendChild(ghost)
    }
    modal.appendChild(close)
    modal.appendChild(icon1)
    modal.appendChild(h2)
    modal.appendChild(p)
    modal.appendChild(actions)
    overlay.appendChild(modal)
    main.appendChild(overlay)
    close.onclick = () => {
        main.removeChild(overlay)
    }
    end_pop_up(primary, true, ghost, hrefok, overlay)
}
const showLogOut = (place) => {

    if (getCurrent()==null||(getCurrent() && Object.keys(getCurrent()).length <= 0)) {
        itnatek.style.display = "none"

    }
    else {

        out.onclick = () => {

            if (place == "home")
                pop_up(main, "האם הינכם בטוחים שאתם רוצים לצאת מהמערכת?", "fa-sign-out-alt", "אישור", "יציאה מהעמרכת תאלץ אתכם להתחבר מחדש", true, "ביטול", "./index.html")
            else
                pop_up(main, "האם הינכם בטוחים שאתם רוצים לצאת מהמערכת?", "fa-sign-out-alt", "אישור", "יציאה מהעמרכת תאלץ אתכם להתחבר מחדש", true, "ביטול", "../index.html")

        }
    }
}


