import React, { Component } from 'react';
import { About, Contact, Projects, Header, Navbar, Footer } from './index';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [] }
  }

  componentDidMount() {
    fetch("projects.json")
      .then(data => data.json())
      .then(data => this.setState({projects: data}))

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
        <Footer />
      </div>
    )
  }
}

export default Home;
