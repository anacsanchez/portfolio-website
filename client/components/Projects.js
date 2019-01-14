import React, { Component } from 'react';
import { SingleProject } from './index';

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  showDescription = (evt) => {
    if (evt.target.parentNode.className == "project") {
      evt.target.parentNode.children[1].children[0].classList.remove("hide");
    }
  }

  hideDescription = (evt) => {
    if(!evt.relatedTarget || evt.relatedTarget.id == "projects-list" || evt.relatedTarget.id == "projects-section" || (evt.relatedTarget.parentNode.className == "project" && evt.relatedTarget.parentNode.id !== evt.currentTarget.id )) {
      evt.currentTarget.children[1].children[0].classList.add("hide");
    }
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
