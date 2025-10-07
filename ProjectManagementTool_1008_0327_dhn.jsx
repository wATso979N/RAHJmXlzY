// 代码生成时间: 2025-10-08 03:27:22
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the project object.
const projectShape = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
};

const ProjectManagementTool = ({ initialProject }) => {
  // State to manage the project
  const [project, setProject] = useState(initialProject);

  // Function to add a new task to the project
  const addTask = (task) => {
    setProject({ ...project, tasks: [...project.tasks, task] });
  };

  // Function to mark a task as completed
  const completeTask = (taskId) => {
    setProject({
      ...project,
      tasks: project.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    });
  };

  // Render the project details and tasks
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <ul>
        {project.tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
            <button onClick={() => completeTask(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask({ id: Date.now().toString(), description: 'New Task', completed: false })}>Add Task</button>
    </div>
  );
};

// Prop types for the ProjectManagementTool component
ProjectManagementTool.propTypes = {
  initialProject: PropTypes.shape(projectShape).isRequired,
};

// Default props for the ProjectManagementTool component
ProjectManagementTool.defaultProps = {
  initialProject: {
    name: '',
    description: '',
    tasks: [],
  },
};

export default ProjectManagementTool;