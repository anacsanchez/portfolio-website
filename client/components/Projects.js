import React, { Component } from 'react';
import { SingleProject } from './index';

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="projects-section">
        <div className="section-title">Projects</div>
        <div id="projects-list">
          {this.props.projects.length ? this.props.projects.map((project,i) => <SingleProject key={i} {...project} />) : null}
        </div>
      </div>
    )
  }
}

export default Projects;
