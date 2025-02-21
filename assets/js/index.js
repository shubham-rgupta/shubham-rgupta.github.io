function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/resume.pdf';  // Path to your CV
    link.download = 'resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function scrollToContact() {
    const contactSection = document.querySelector("#contact"); // Target the contact section
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
    }
}
function redirectToGmail(event) {
    event.preventDefault(); // Prevent actual form submission

    let subject = encodeURIComponent(document.getElementById("subjectInput").value);
    let message = encodeURIComponent(document.getElementById("messageInput").value);
    let recipientEmail = "shubhamgupta.srg@gmail.com"; // Replace with your actual email

    let gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${message}`;

    window.open(gmailURL, "_blank"); // Open Gmail in a new tab
}