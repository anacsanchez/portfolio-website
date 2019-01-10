import React from 'react'

const Contact = ({handleEmail}) => {
  return (
    <div id="contact-section">
      <div className="section-title">Contact</div>
      <form id="email-form" onSubmit={handleEmail}>
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
