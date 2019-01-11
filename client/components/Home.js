import React, { Component } from 'react';
import { About, Contact, Projects, Header, Navbar } from './index';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  emailMessage = (evt) => {
    evt.preventDefault();
    const {email, message, subject} = evt.target;
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({ email: email.value, subject: subject.value, message: message.value }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => alert('Email sent!'))
    .catch(err =>  console.error(err))
  }

  componentDidMount() {
    fetch("projects.json")
      .then(data => data.json())
      .then(data => {
        this.setState({projects: data})
    })

    window.addEventListener('scroll', () => {
      // console.log(document.getElementById("header").scrollHeight)
      // if (window.scrollY > window.innerHeight * .6) {
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
        <Contact handleEmail={this.emailMessage}/>
      </div>
    )
  }
}

export default Home;
