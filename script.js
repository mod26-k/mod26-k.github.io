//projects menu
const tabs = document.querySelectorAll('.project-container input[type="radio"]');
const contents = document.querySelectorAll('.project-container .content');

tabs.forEach((tab, index) => {
  tab.addEventListener('change', () => {
    contents.forEach((content, contentIndex) => {
      if (contentIndex !== index) {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});

// Show only the first content initially
contents.forEach((content, index) => {
  if (index !== 0) {
    content.style.display = 'none';
  }
});


//email form
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#senderName");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "SWa_QQT2YR2s_8gwW"
const serviceID = "service_v0cevif"
const templateID = "template_1qyfpia"

emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  submitBtn.innerText = "Sending ...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  console.log("Name:", inputFields.name);
  console.log("Email:", inputFields.email);
  console.log("Message:", inputFields.message);

  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Sent!";

      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Hmm, that didn't work.";
    });
});
