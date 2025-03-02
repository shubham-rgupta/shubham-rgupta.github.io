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
            let start = 0;
            let increment = target / (duration / 16);
            let element = document.getElementById(elementId);
            
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

            if (allCheckbox.checked) {
                // Delay unchecking all checkboxes
                checkboxes.forEach((cb, index) => {
                    setTimeout(() => cb.checked = false, index * 100); // 100ms delay per checkbox
                });
            }
            setTimeout(filterProjects, checkboxes.length * 100); // Apply filter after delay
        }

        function filterProjects() {
            let allCheckbox = document.getElementById("all");
            let checkboxes = document.querySelectorAll(".filter-bar input[type='checkbox']:not(#all)");
            let selectedCategories = [];

            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedCategories.push(cb.value);
                }
            });

            // If all checkboxes are selected, tick "All" and untick others with delay
            if (selectedCategories.length === checkboxes.length) {
                setTimeout(() => {
                    allCheckbox.checked = true;
                    checkboxes.forEach((cb, index) => {
                        setTimeout(() => cb.checked = false, index * 100);
                    });
                }, 100);
                selectedCategories = [];
            } else {
                allCheckbox.checked = false;
            }

            // If no category is selected, show all projects and check "All" with a delay
            if (selectedCategories.length === 0) {
                setTimeout(() => allCheckbox.checked = true, 100);
            }

            let projects = document.querySelectorAll(".project");

            projects.forEach((project, index) => {
                let isVisible = selectedCategories.some(category => project.classList.contains(category));
                setTimeout(() => {
                    project.style.display = (selectedCategories.length === 0 || isVisible) ? "block" : "none";
                }, index * 0); // Staggered effect
            });
        }
