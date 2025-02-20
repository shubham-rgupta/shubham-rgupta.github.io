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