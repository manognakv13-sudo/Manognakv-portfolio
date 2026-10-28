import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Project.scss';

const projects = [
    {
        name: "Library Management System",
        description: "Developed RESTful CRUD APIs for books, members, and issue records using a Controller-Service-Repository architecture. Added relational entity mapping, input validation, and exception handling.",
        skills: "Java · Spring Boot · Spring Data JPA · Hibernate · MySQL · Maven · Postman",
        repository: "https://github.com/manognakv13-sudo/library-management-system",
    },
    {
        name: "Online Food Ordering System",
        description: "Built CRUD-oriented REST APIs for restaurants, menu items, customers, and orders, with MySQL persistence, layered services, validation, and exception handling.",
        skills: "Java · Spring Boot · Spring Data JPA · Hibernate · MySQL",
        repository: "https://github.com/manognakv13-sudo/Online_Food_Ordering_System",
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project) => (
                <article className="project-card" key={project.name}>
                    <div className="project-card-content">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                    <div className="project-card-footer">
                        <p className="project-skills">{project.skills}</p>
                        {project.repository && (
                            <a
                                className="project-link"
                                href={project.repository}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`View ${project.name} on GitHub`}
                            >
                                <GitHubIcon aria-hidden="true" />
                                <span>View on GitHub</span>
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    </div>
    );
}

export default Project;