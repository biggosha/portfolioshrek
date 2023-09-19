const scriptURL = 'https://script.google.com/macros/s/AKfycbygBjLR21YCI9wVZ60Cr6JGUcBYQVljBmz2R1NqL3E0PZ_0pS5QA50QjRke0I9aM6_8/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.style.color = "Green"
        msg.innerHTML = "Message sent."
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => {
        msg.style.color = "Red"
        msg.innerHTML = "Message not sent. Reason: " + error.message + ". Check console for more info."
    })
})