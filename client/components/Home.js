import React, { Component } from 'react';
import { Landing, About, Contact, Projects } from './index';

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
    window.addEventListener('scroll', (evt) => {

      if (window.scrollY > window.innerHeight) {
        console.log('show header!')
      }
      else {
        console.log(window.scrollY)
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  render() {
    return (
      <div id="home-page" onScroll={this.handleScroll}>
        <Landing />
        <About />
        <Projects projects={this.state.projects} />
        <Contact handleEmail={this.emailMessage}/>
      </div>
    )
  }
}

export default Home;
