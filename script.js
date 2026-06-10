// Form Submission Handling
const supportForm = document.getElementById("supportForm");
const responseMessage = document.getElementById("responseMessage");

supportForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const message = document.getElementById("message").value;

    responseMessage.style.display = "block";
    responseMessage.style.whiteSpace = "pre-line";
    responseMessage.innerHTML = `
        Form Submitted Successfully!

        Thanks, ${name}. We have received your ${role.toLowerCase()} request.

        Request Summary:

        ${role} ${name} stated: "${message}"
    `;

    supportForm.reset();
});

// FAQ Chatbot Concept
const faqSelect = document.getElementById("faqSelect");
const chatbotAnswer = document.getElementById("chatbotAnswer");

faqSelect.addEventListener("change", function () {
    let answer = "";

    switch (faqSelect.value) {
        case "services":
            answer =
                "We provide healthcare support guidance, volunteer coordination, and community assistance.";
            break;

        case "volunteer":
            answer =
                "You can volunteer by filling out the registration form and selecting 'Volunteer' as your role.";
            break;

        case "request":
            answer =
                "Patients can request help by submitting the support form with their requirements.";
            break;

        case "free":
            answer =
                "Yes, our NGO support services are provided free of cost to those in need.";
            break;

        default:
            chatbotAnswer.style.display = "none";
            return;
    }

    chatbotAnswer.style.display = "block";
    chatbotAnswer.textContent = answer;
});
