showLogOut("masseges")

let badge = document.querySelectorAll(".badge")
const current = getCurrent()
let type = document.querySelector('#type')
type.innerText += current.dr_tr == 1 ? 'נהג' : 'נוסע';
let chat_container = document.querySelector('.chat-container')
let mailButtons = document.querySelectorAll('.mail')

let d = new Date(Date.now())

let hour = document.querySelector('#hour')
let date = document.querySelector('#date')
date.innerText = d.toLocaleDateString()
hour.innerText = `${d.getHours()}:${d.getMinutes()}`
let person_name = document.querySelector("#person_name")
person_name.innerText = `${current.fName} ${current.lName}`
const show = () => {
    if (getMasseges() && Object.keys(getMasseges()).length > 0) {

        const myMasseges = getMasseges().filter(x => x.from == current.id || x.to == current.id)
        const sentMasseges = myMasseges.filter(x => x.from == current.id)

        const receivedMasseges = myMasseges.filter(x => x.to == current.id)
        badge[0].innerText = myMasseges.length;
        badge[1].innerText = receivedMasseges.length;
        mailButtons[0].onclick = () => {

            mailButtons.forEach(b => b.classList.remove("act"))
            mailButtons[0].classList.add("act")

            showMail(myMasseges)
        }

        mailButtons[1].onclick = () => {

            mailButtons.forEach(b => b.classList.remove("act"))
            mailButtons[1].classList.add("act")
            showMail(receivedMasseges)
        }

        mailButtons[2].onclick = () => {
            mailButtons.forEach(b => b.classList.remove("act"))
            mailButtons[2].classList.add("act")
            showMail(sentMasseges)
        }

        const showMail = (Masseges) => {
            chat_container.innerText = ""
            Masseges.forEach(massege => {
                let message_received = document.createElement('div')
                let message_sent = document.createElement('div')

                let reply = document.createElement('i')
                reply.classList.add("fas")
                reply.classList.add("fa-reply")
                reply.classList.add("reply-icon")
                if (massege.from == current.id) {

                    message_sent.classList.add("message")
                    message_sent.classList.add("sent")
                    let det = document.createElement('div')
                    det.className = "det"
                    let wroten = document.createElement('p')
                    wroten.className = "wroten"
                    wroten.innerText = "את/ה"
                    let massege_bubble = document.createElement('div')
                    massege_bubble.className = "message-bubble"
                    let p = document.createElement('p')
                    p.innerText = massege.content
                    massege_bubble.appendChild(p)
                    massege_bubble.appendChild(reply)
                    det.appendChild(wroten)
                    det.appendChild(massege_bubble)
                    message_sent.appendChild(det)
                    chat_container.appendChild(message_sent)
                }
                else {

                    message_received.classList.add("message")
                    message_received.classList.add("received")
                    let det = document.createElement('div')
                    det.className = "det"
                    let wroten = document.createElement('p')
                    wroten.className = "wroten"
                    wroten.innerText = massege.nameFrom
                    let massege_bubble = document.createElement('div')
                    massege_bubble.className = "message-bubble"
                    let p = document.createElement('p')
                    p.innerText = massege.content
                    massege_bubble.appendChild(p)
                    massege_bubble.appendChild(reply)
                    det.appendChild(wroten)
                    det.appendChild(massege_bubble)
                    message_received.appendChild(det)
                    chat_container.appendChild(message_received)
                }
                reply.onclick = () => {
                    let chat_input = document.createElement('div')
                    chat_input.className = "chat-input-wrapper"
                    let attach = document.createElement('button')
                    attach.className = "attach-btn"
                    let paperclip = document.createElement('i')
                    paperclip.classList.add("fas")
                    paperclip.classList.add("fa-paperclip")
                    attach.appendChild(paperclip)
                    let input = document.createElement('input')
                    input.placeholder = "כתוב הודעה ..."
                    let send = document.createElement('button')
                    send.className = "send-btn-icon"
                    let paperplane = document.createElement('i')
                    paperplane.classList.add("fas")
                    paperplane.classList.add("fa-paper-plane")
                    send.appendChild(paperplane)
                    chat_input.appendChild(attach)
                    chat_input.appendChild(input)
                    chat_input.appendChild(send)
                    chat_container.appendChild(chat_input)
                    paperplane.onclick = () => {
                        chat_input.style.display = "none"
                        let obj = { content: input.value, from: current.id, to: massege.from, nameFrom: current.fName, date: new Date().getTime() }

                        updateMassege(obj)
                        show();
                    };
                }

            })
        }
        showMail(myMasseges)

    }
    else {
        let h1 = document.createElement('h2')
        h1.innerText = "אין הודעות"
        h1.className = "no_msg"
        chat_container.innerText = ""
        chat_container.appendChild(h1)
        badge[0].innerText = 0;
        badge[1].innerText = 0;
    }
};

show();