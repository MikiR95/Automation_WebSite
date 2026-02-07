function sendMail(e) {
  e.preventDefault();
  const company = document.getElementById('company').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(`Wiadomość ze strony - ${company}`);
  const body = encodeURIComponent(`Imię i nazwisko: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:rafal.mikolajczak95@gmail.com?subject=${subject}&body=${body}`;
}