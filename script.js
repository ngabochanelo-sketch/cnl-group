 const chatToggle = document.getElementById("chatToggle");
 const chatWindow = document.getElementById("chatWindow");
 const chatClose = document.getElementById("chatClose");

 const chatInput = document.getElementById("chatInput");
 const chatSend = document.getElementById("chatSend");
 const chatMessages = document.getElementById("chatMessages");


 chatToggle.addEventListener("click", function() {

     chatWindow.classList.toggle("active");

     if (chatWindow.classList.contains("active")) {
         chatInput.focus();
     }

 });


 chatClose.addEventListener("click", function() {

     chatWindow.classList.remove("active");

 });


 function addMessage(message, type) {

     const messageElement = document.createElement("div");

     if (type === "user") {
         messageElement.className = "user-message";
     } else {
         messageElement.className = "bot-message";
     }

     messageElement.textContent = message;

     chatMessages.appendChild(messageElement);

     chatMessages.scrollTop = chatMessages.scrollHeight;

 }


 function getBotResponse(message) {

     const text = message.toLowerCase();


     if (text.includes("hello") || text.includes("hi")) {

         return "Hello! 👋 Welcome to CNL GROUP. How can I help you?";

     }


     if (text.includes("service")) {

         return "CNL GROUP provides professional services and solutions. Ask me about our services.";

     }


     if (text.includes("contact")) {

         return "You can contact our Founder & CEO at ngabochanelo@gmail.com.";

     }


     if (text.includes("email")) {

         return "You can email CNL GROUP at ngabochanelo@gmail.com.";

     }


     if (text.includes("ceo") || text.includes("founder")) {

         return "The Founder & CEO of CNL GROUP is Ngabo Chanel.";

     }


     if (text.includes("about")) {

         return "CNL GROUP is a growing organization providing quality services and solutions.";

     }


     return "Thanks for your message! I'm the CNL GROUP assistant. How can I help you?";

 }


 function sendMessage() {

     const message = chatInput.value.trim();


     if (message === "") {

         return;

     }


     addMessage(message, "user");

     chatInput.value = "";


     setTimeout(function() {

         const response = getBotResponse(message);

         addMessage(response, "bot");

     }, 500);

 }


 chatSend.addEventListener("click", sendMessage);


 chatInput.addEventListener("keydown", function(event) {

     if (event.key === "Enter") {

         sendMessage();

     }

 });