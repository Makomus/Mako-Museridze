document.addEventListener("DOMContentLoaded", function() {
    const emailElements = document.getElementsByClassName('email');

    for (let i = 0; i < emailElements.length; i++) {
    emailElements[i].addEventListener('click', function() {
        const gmailComposeURL = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=itacademy@tbcbank.com.ge";

        window.open(gmailComposeURL, "_blank");
    });
}
});



