
function toggleService(element) {
    const icon = element.querySelector('i');
    const content = element.querySelector('.service-content');
    const isActive = element.classList.contains('active');
    
    // Close all other items
    document.querySelectorAll('.service-item').forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
            item.querySelector('i').classList.remove('fa-minus');
            item.querySelector('i').classList.add('fa-plus');
            item.querySelector('.service-content').classList.remove('active');
        }
    });
    
    if (isActive) {
        element.classList.remove('active');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        content.classList.remove('active');
    } else {
        element.classList.add('active');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        content.classList.add('active');
    }
}








     document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("fullName").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;

            let contactData = { name, email, phone };
            localStorage.setItem("contactDetails", JSON.stringify(contactData));

            window.location.href = "contact.html";
        });


  