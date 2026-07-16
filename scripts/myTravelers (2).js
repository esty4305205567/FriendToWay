showLogOut("myTraveler")

let Alltravelers = document.querySelector('#Alltravelers')
let current = getCurrent()
const Askings = getAsks()
let myAsks = []
let done = []
let wait = []
if (current.dr_tr == 1) {

    myAsks = Askings.filter(x => (x.gender == current.prefer || current.prefer == "לא משנה") && (x.sizePackage == current.sizePagaz || current.sizePagaz == "גדול"))
    done = myAsks.filter((x) => x.status == "done" && x.idDriver != null && x.idDriver == current.id)
    wait = myAsks.filter((x) => x.status == "wait")
}
else {
    myAsks = Askings.filter(x => x.idAsk == current.id)
    done = myAsks.filter((x) => x.status == "done" && x.idAsk == current.id)
    wait = myAsks.filter((x) => x.status == "wait" && x.idAsk == current.id)
}


let noT = document.querySelector("#noT")
let filter_switch = document.querySelectorAll(".filter-btn")
filter_switch[0].onclick = () => {

    filter_switch.forEach(x => x.classList.remove("active"))
    filter_switch[0].classList.add("active")
    all(myAsks)

}
filter_switch[2].onclick = () => {

    filter_switch.forEach(x => x.classList.remove("active"))
    filter_switch[2].classList.add("active")

    all(done)
}
filter_switch[1].onclick = () => {

    filter_switch.forEach(x => x.classList.remove("active"))
    filter_switch[1].classList.add("active")
    all(wait)
}
let chats = document.querySelectorAll('.chat')
chats.forEach(x => x.style.display = "none")
const all = (myAsks) => {

    Alltravelers.innerText = ""
    if (myAsks.length == 0) {
        noT.style.display = "block"
        return;
    }

    else if (current.dr_tr == 1) {
        noT.style.display = "none"

        myAsks.forEach(x => {
            let ride_card = document.createElement('div')
            ride_card.className = "ride-card";
            let statusMassege = document.createElement('div')
            if (x.status == "wait") {
                statusMassege.className = "ride-status-waiting"
                statusMassege.innerText = "ממתין"
            }
            else {
                statusMassege.className = "ride-status-done"
                statusMassege.innerText = "טופל"
            }
            ride_card.appendChild(statusMassege)
            let ride_content = document.createElement('div')
            ride_content.className = "ride-content"

            ride_card.appendChild(ride_content)
            let ride_title = document.createElement('div')

            ride_title.className = "ride-title"
            ride_title.innerText = x.from + "<-" + x.to

            let ride_details = document.createElement('div')
            ride_details.className = "ride-details"
            let pdriver = document.createElement('p')
            let strong1 = document.createElement('strong')
            strong1.innerText = "נוסע: "

            let strong2 = document.createElement('strong')
            pdriver.appendChild(strong1)
            pdriver.innerText += x.namePassengers + " | "
            pdriver.appendChild(strong2)
            strong2.innerText = "טלפון: "
            pdriver.innerText += x.phonePassengers
            let pPac = document.createElement('p')
            let strong3 = document.createElement('strong')
            let strong4 = document.createElement('strong')
            pPac.appendChild(strong3)
            strong3.innerText = "חבילה: "
            pPac.innerText += x.sizePackage + " | "
            pPac.appendChild(strong4)
            strong4.innerText = "הערה: "
            pPac.innerText += x.note
            ride_details.appendChild(pdriver)
            ride_details.appendChild(pPac)
            ride_content.appendChild(ride_title)
            ride_content.appendChild(ride_details)


            let ride_actions = document.createElement('div')
            ride_actions.className = "ride-actions"
            let sendMass = document.createElement('button')
            if (x.status == "wait") {
                sendMass.innerText = "רוצה לבצע נסיעה זו"
            }
            else {
                sendMass.innerText = "שלח הודעה"

            }
            ride_actions.appendChild(sendMass)
            ride_card.appendChild(ride_actions)
            let chat = document.createElement('div')
            chat.className = "chat"

            let chat_text = document.createElement('p')
            chat_text.className = "chat-status-text"
            chat.appendChild(chat_text)

            let chat_input = document.createElement('div')
            chat_input.className = "chat-input-wrapper"
            let attach = document.createElement('button')
            attach.className = "attach-btn"

            let paperclip = document.createElement('i')
            paperclip.classList.add("fas")
            paperclip.classList.add("fa-paperclip")
            attach.appendChild(paperclip)


            let input = document.createElement('input')
            input.placeholder = "כתוב הודעה לנוסע..."



            let send = document.createElement('button')
            send.className = "send-btn-icon"

            let paperplane = document.createElement('i')
            paperplane.classList.add("fas")
            paperplane.classList.add("fa-paper-plane")
            send.appendChild(paperplane)

            chat_input.appendChild(attach)
            chat_input.appendChild(input)
            chat_input.appendChild(send)

            chat.appendChild(chat_input)
            ride_card.appendChild(chat)
            Alltravelers.appendChild(ride_card)
            chat.style.display = "none"
            sendMass.onclick = () => {
                chat.style.display = "block"
            }
            paperplane.onclick = () => {
                statusMassege.innerText = "טופל"

                chat_text.innerText = input.value
                statusMassege.className = "ride-status-done"
                chat_text.innerText = input.value
                chat_input.style.display = "none"
                let obj = { from: current.id, to: x.idAsk, content: input.value, date: new Date().getTime(), nameFrom: current.fName }
                x.status = "done"
                x.idDriver = current.id
                const index = Askings.findIndex(ask => ask.idAsk === x.idAsk);
                if (index !== -1) {
                    let asks = [...Askings.slice(0, index), ...Askings.slice(index + 1)]
                    updateAskings(asks)
                    updateAsks(x)
                    updateMassege(obj)
                }
                location.reload()
            };
        }
        )
    }
    else {
        noT.style.display = "none"

        myAsks.forEach(x => {
            let ride_card = document.createElement('div')
            ride_card.className = "ride-card";
            let statusMassege = document.createElement('div')
            if (x.status == "wait") {
                statusMassege.className = "ride-status-waiting"
                statusMassege.innerText = "ממתין"
            }
            else {
                statusMassege.className = "ride-status-done"
                statusMassege.innerText = "טופל"
            }
            ride_card.appendChild(statusMassege)
            let ride_content = document.createElement('div')
            ride_content.className = "ride-content"

            ride_card.appendChild(ride_content)
            let ride_title = document.createElement('div')

            ride_title.className = "ride-title"
            ride_title.innerText = x.from + "<-" + x.to

            let ride_details = document.createElement('div')
            ride_details.className = "ride-details"
            let pdriver = document.createElement('p')
            let strong1 = document.createElement('strong')
            strong1.innerText = "נוסע: "

            let strong2 = document.createElement('strong')
            pdriver.appendChild(strong1)
            pdriver.innerText += x.namePassengers + " | "
            pdriver.appendChild(strong2)
            strong2.innerText = "טלפון: "
            pdriver.innerText += x.phonePassengers
            let pPac = document.createElement('p')
            let strong3 = document.createElement('strong')
            let strong4 = document.createElement('strong')
            pPac.appendChild(strong3)
            strong3.innerText = "חבילה: "
            pPac.innerText += x.sizePackage + " | "
            pPac.appendChild(strong4)
            strong4.innerText = "הערה: "
            pPac.innerText += x.note
            ride_details.appendChild(pdriver)
            ride_details.appendChild(pPac)
            ride_content.appendChild(ride_title)
            ride_content.appendChild(ride_details)


            let ride_actions = document.createElement('div')
            ride_actions.className = "remove"
            let sendMass = document.createElement('button')
            if (x.status == "wait")
                sendMass.innerText = "מחק"
            else {
                sendMass.innerText = "הנסיעה בוצעה"

            }
            sendMass.className = "remove-btn"
            ride_actions.appendChild(sendMass)
            ride_card.appendChild(ride_actions)
            let chat = document.createElement('div')
            chat.className = "chat"

            let chat_text = document.createElement('p')
            chat_text.className = "chat-status-text"
            chat.appendChild(chat_text)

            let chat_input = document.createElement('div')
            chat_input.className = "chat-input-wrapper"
            let attach = document.createElement('button')
            attach.className = "attach-btn"

            let paperclip = document.createElement('i')
            paperclip.classList.add("fas")
            paperclip.classList.add("fa-paperclip")
            attach.appendChild(paperclip)


            let input = document.createElement('input')
            input.placeholder = "כתוב הודעה לנוסע..."



            let send = document.createElement('button')
            send.className = "send-btn-icon"

            let paperplane = document.createElement('i')
            paperplane.classList.add("fas")
            paperplane.classList.add("fa-paper-plane")
            send.appendChild(paperplane)

            chat_input.appendChild(attach)
            chat_input.appendChild(input)
            chat_input.appendChild(send)

            chat.appendChild(chat_input)
            ride_card.appendChild(chat)
            Alltravelers.appendChild(ride_card)
            chat.style.display = "none"
            sendMass.onclick = () => {
                if (x.status == "wait") {

                    const index = Askings.findIndex(ask => ask.idAsk === x.idAsk);
                    if (index !== -1) {

                        let asks = [...Askings.slice(0, index - 1)]

                        asks.push([...Askings.slice(index + 1)])

                        updateAskings(asks)

                        Alltravelers.removeChild(ride_card)
                        location.reload()

                    }
                }
            }



            paperplane.onclick = () => {
                chat_text.innerText = input.value
                statusMassege.className = "ride-status-done"
                chat_text.innerText = input.value
                chat_input.style.display = "none"
                statusMassege.innerText = "טופל"

                let obj = { from: current.id, to: x.idAsk, content: input.value, date: new Date().getTime(), nameFrom: current.fName }
                x.status = "done"

                updateMassege(obj)
            }


        }
        )
    }
}

const Done = (arr) => {
    all(arr)
}
all(myAsks)
