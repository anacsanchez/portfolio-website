import React from 'react'

const Contact = ({handleEmail}) => {
  return (
    <div id="contact-section" className="section">
      <div className="section-title">Contact</div>
      <form id="email-form" onSubmit={handleEmail}>
        <table>
          <tbody>
          <tr>
            <td><label>Email Address: </label></td><td><input required type="email" name="email" size="45" autoComplete="off"/></td>
          </tr>
          <tr>
            <td><label>Message: </label></td><td><textarea required name="message" rows="10" cols="50" /></td>
          </tr>
          <tr><td colSpan="2" style={{textAlign: "center"}}><input type="submit" value="Send"/></td></tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Contact;
