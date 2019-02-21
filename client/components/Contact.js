import React from 'react'

const Contact = () => {

  const emailMessage = (evt) => {
    evt.preventDefault();
    const {email, message, subject} = evt.target;
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({ email: email.value, subject: subject.value, message: message.value }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => alert('Thank you for reaching out to me!'))
    .catch(err =>  console.error(err))
  }

  return (
    <div id="contact-section">
      <div className="section-title">Contact</div>
      <div className="section-description">If you'd like to contact me about job or project opportunities, you can send me an email through the form below:</div>
      <form id="email-form" onSubmit={emailMessage}>
        <table>
          <tbody>
          <tr>
            <td className="field-name"><label>Email Address:  </label></td><td><input required type="email" name="email" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="field-name"><label>Subject: </label></td><td width="60%"><input required type="text" name="subject" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="field-name"><label>Message: </label></td><td><textarea  rows="8" required name="message" /></td>
          </tr>
          <tr><td colSpan="2" style={{textAlign: "center"}}><input type="submit" value="Send"/></td></tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Contact;
