import React from 'react';

const Contact = () => {

  const handleEmailSubmit = (evt) => {
    evt.preventDefault();
    const {email, message, subject} = evt.target;
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        subject: subject.value,
        message: message.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => alert('Thank you for reaching out to me!'))
    .catch(err =>  console.error(err));
  };

  return (
    <div id="contact-section">
      <div className="section-title">Contact</div>
      <div className="section-description">If you'd like to contact me about job or project opportunities, you can send me an email through the form below:</div>
      <form id="email-form" onSubmit={ handleEmailSubmit }>
        <label>Email:</label><input required type="email" name="email" autoComplete="off"/>
        <label>Subject:</label><input required type="text" name="subject" autoComplete="off"/>
        <label>Message:</label><textarea required name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
