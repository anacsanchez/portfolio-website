import React, { Component } from 'react';
import { About, Contact, Projects, Header, Navbar, Footer } from './index';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  // emailMessage = (evt) => {
  //   evt.preventDefault();
  //   const {email, message, subject} = evt.target;
  //   fetch('/api/email', {
  //     method: 'POST',
  //     body: JSON.stringify({ email: email.value, subject: subject.value, message: message.value }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(() => alert('Thank you for reaching out to me!'))
  //   .catch(err =>  console.error(err))
  // }

  componentDidMount() {
    fetch("projects.json")
      .then(data => data.json())
      .then(data => {
        this.setState({projects: data})
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > document.getElementById("header").scrollHeight) {
        if(document.getElementById("navbar").classList.contains("hide"))
        document.getElementById("navbar").classList.remove("hide")
      }
      else {
        if (!document.getElementById("navbar").classList.contains("hide")) {
          document.getElementById("navbar").classList.add("hide")
        }
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  render() {
    return (
      <div id="home-page">
        <Header />
        <Navbar />
        <Projects projects={this.state.projects} />
        <About />
        <Contact />
        {/* <Contact handleEmail={this.emailMessage}/> */}
        <Footer />
      </div>
    )
  }
}

export default Home;
