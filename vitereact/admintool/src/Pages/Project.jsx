// import React from 'react';

function ProjectPage() {
  // Sample project data (replace with your actual project data)
  const project = {
    title: 'Sample Project',
    description: 'This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'In Progress',
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    team: [
      { name: 'John Doe', email: 'john@example.com', role: 'Developer' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
    ],
    website: 'https://example.com',
    contact: 'contact@example.com',
    toolsUsed: ['Tool 1', 'Tool 2', 'Tool 3'],
    // Add more project data here...
  };

  return (
    <div className="project-page">

      <div className="project-header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src="path_to_logo.png" alt="Project Logo" />
        <div className="project-title">
          <h1>{project.title}</h1>
        </div>
      </div>

      <p>{project.description}</p>

      <div className="project-details">
        <div>Status: {project.status}</div>
        <div>Start Date: {project.startDate}</div>
        <div>End Date: {project.endDate}</div>
      </div>

      <h2>Project Team</h2>
      <div>
        <ul>
          {project.team.map((member, index) => (
            <li key={index}>
              {member.name} - {member.role} -{' '}
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </li>
          ))}
        </ul>
      </div>

      <h2>Project Tools</h2>
      <div>
        <ul>
          {project.toolsUsed.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      <div>
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          Project Website
        </a>
        <span> | </span>
        <a href={`mailto:${project.contact}`}>Contact</a>
      </div>

    </div>
  );
}

export default ProjectPage;
