document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('contactButton');
    const contactInfo = document.querySelector('.l2');
  
    button.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
    });
  
    button.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  
    button.addEventListener('click', function() {
      if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
        this.textContent = 'Ocultar Contatos';
      } else {
        contactInfo.style.display = 'none';
        this.textContent = 'Contatos de Emergência';
      }
    });
  
    // Initially hide the contact info
    contactInfo.style.display = 'none';
  });
