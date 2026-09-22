document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Replace with your WhatsApp phone number including country code (e.g., 91××××××××)
    const phoneNumber = '919103882375'; 
    const url = `https://wa.me/${phoneNumber}?text=Name:%20${encodeURIComponent(name)}%0AMessage:%20${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
});

