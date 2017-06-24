import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItem;
    if (this.props.projects){
      projectItem = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        )
      })
    }
    return (
      <div className="App">
      <hr />
      <h3>My latest projects</h3>
        {projectItem}
        <br/>
      </div>
    );
  }
}

export default Projects;
