document.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    const selector = copyButton.getAttribute("data-copy");
    const target = document.querySelector(selector);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.innerText);
      const oldText = copyButton.textContent;
      copyButton.textContent = "הועתק";
      setTimeout(() => copyButton.textContent = oldText, 1200);
    } catch {
      alert("לא ניתן להעתיק אוטומטית. סמני את הקוד והעתיקי ידנית.");
    }
  }

  const openDialog = event.target.closest("[data-open-dialog]");
  if (openDialog) {
    const selector = openDialog.getAttribute("data-open-dialog");
    const dialog = document.querySelector(selector);
    if (dialog && typeof dialog.showModal === "function") dialog.showModal();
  }

  const closeDialog = event.target.closest("[data-close-dialog]");
  if (closeDialog) {
    const dialog = closeDialog.closest("dialog");
    if (dialog) dialog.close();
  }
});
