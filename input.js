document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Replace with your WhatsApp phone number including country code (e.g., 91××××××××)
    const phoneNumber = '919103882375'; 
    const url = `https://wa.me/${phoneNumber}?text=Name:%20${encodeURIComponent(name)}%0AMessage:%20${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
});
function secureAccess() {
  const secretQuestion = "What is Shopian also known as?";
  const secretAnswer = "apple town"; 

  let userAnswer = prompt(secretQuestion);

  if (userAnswer && userAnswer.toLowerCase().trim() === secretAnswer) {
    alert("Access Granted!");
  } else {
    alert("Incorrect answer. Access denied.");
    location.reload(); 
  }
}

secureAccess();
