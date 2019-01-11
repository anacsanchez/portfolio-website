import React, { Component } from 'react';
import { SingleProject } from './index';

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  showDescription = (evt) => {
    // console.log(evt.target)
    // evt.stopPropagatio n()
    // evt.target.children[1].classList.add("hide")
    // evt.target.children[2].classList.remove("hide")
    // evt.target.children[1].children[0].classList.remove("hide")
    // console.log(evt.target.classList.add('hide'));
    // console.log(evt.target.children)\
    // console.log(evt.target)
    // evt.target.children[0].classList.add('full')
  }

  hideDescription = (evt) => {
    // evt.target.children[1].classList.remove("hide")
    // evt.target.children[2].classList.add("hide")
  }

  render() {
    return (
      <div id="projects-section">
        <div className="section-title">Projects</div>
        <div id="projects-list">
          {this.props.projects.length ? this.props.projects.map((project,i) => <SingleProject projKey={i} key={i} handleMouseOver={this.showDescription} handleMouseOut={this.hideDescription} project={project}/>) : null}
        </div>
      </div>
    )
  }
}

export default Projects;
