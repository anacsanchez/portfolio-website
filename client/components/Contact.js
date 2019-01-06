import React from 'react'

const Contact = ({handleEmail}) => {
  return (
    <div id="contact-section" className="section">
      <div className="section-title">Contact</div>
      <form id="email-form" onSubmit={handleEmail}>
        <table>
          <tbody>
          <tr>
            <td><label>Email Address: </label></td><td><input type="email" name="email"/></td>
          </tr>
          <tr>
            <td><label>Message: </label></td><td><textarea name="message" /></td>
          </tr>
          <tr><td colSpan="2" style={{textAlign: "center"}}><input type="submit" /></td></tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Contact;
