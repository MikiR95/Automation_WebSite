function sendMail(e) {
  e.preventDefault();
  const company = document.getElementById('company').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = new FormData();
  formData.append('company', company);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  fetch('send.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    if (data.success) {
      document.querySelector('.contact-form').reset();
    }
  })
  .catch(error => {
    alert('Błąd wysyłania wiadomości');
    console.error('Error:', error);
  });
}
