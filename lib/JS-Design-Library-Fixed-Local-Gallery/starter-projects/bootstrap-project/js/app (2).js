const button = document.querySelector("#demoBtn");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "ה-JavaScript עובד!";
});
