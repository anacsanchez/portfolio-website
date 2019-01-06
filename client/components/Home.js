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
    const {email, message} = evt.target;
    console.log(email.value, message.value)
  }

  componentDidMount() {
    fetch("projects.json")
      .then(data => data.json())
      .then(data => {
        this.setState({projects: data})
    })
  }
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Projects projects={this.state.projects} />
        <Contact handleEmail={this.emailMessage}/>
      </div>
    )
  }
}

export default Home;
