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
    let recipientEmail = "shubhamgupta.srg@gmail.com"; //Replace with your actual email

    let gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${message}`;

    window.open(gmailURL, "_blank"); // Open Gmail in a new tab
}
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        setTimeout(function () {
            document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "smooth" });
        }, 500);
    }
});
function animateNumber(elementId, target, duration) {
    let element = document.getElementById(elementId);
    if (!element) return; // Null check to prevent errors

    let start = 0;
    let increment = target / (duration / 16);

    function updateNumber() {
        start += increment;
        if (start >= target) {
            element.innerText = target + "+";
        } else {
            element.innerText = Math.floor(start) + "+";
            requestAnimationFrame(updateNumber);
        }
    }
    requestAnimationFrame(updateNumber);
}

animateNumber("client-number", 40, 2000); // Animate to 40+ in 2 seconds
animateNumber("project-number", 55, 2000); // Animate to 55+ in 2 seconds


        /*FILTER PROJECT*/

        function toggleAll() {
            let allCheckbox = document.getElementById("all");
            let checkboxes = document.querySelectorAll(".filter-bar input[type='checkbox']:not(#all)");

            // Uncheck all other checkboxes when "All" is selected
            if (allCheckbox.checked) {
                checkboxes.forEach(cb => cb.checked = false);
            }
            filterProjects();
        }

        function setupCheckboxListeners() {
            let allCheckbox = document.getElementById("all");
            let checkboxes = document.querySelectorAll(".filter-bar input[type='checkbox']:not(#all)");

            checkboxes.forEach(cb => {
                cb.addEventListener("change", function() {
                    if (this.checked) {
                        checkboxes.forEach(otherCb => {
                            if (otherCb !== this) otherCb.checked = false;
                        });
                        allCheckbox.checked = false;
                    } else {
                        allCheckbox.checked = true;
                    }
                    filterProjects();
                });
            });
        }

        function filterProjects() {
            let allCheckbox = document.getElementById("all");
            let checkboxes = document.querySelectorAll(".filter-bar input[type='checkbox']:not(#all)");
            let selectedCategory = null;

            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedCategory = cb.value;
                }
            });

            if (!selectedCategory) {
                allCheckbox.checked = true;
            }

            let projects = document.querySelectorAll(".project");

            projects.forEach(project => {
                let isVisible = selectedCategory ? project.classList.contains(selectedCategory) : true;
                project.style.display = isVisible ? "block" : "none";
            });
        }

// Initialize event listeners on page load
        document.addEventListener("DOMContentLoaded", setupCheckboxListeners);


