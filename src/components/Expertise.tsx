import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const skillGroups = [
    {
        title: "Java & Backend Development",
        description: "Building maintainable Java applications and REST APIs with layered architecture, validation, and exception handling.",
        icon: faJava,
        skills: [
            "Java",
            "Spring Boot",
            "Spring Framework",
            "Spring Data JPA",
            "Hibernate",
            "Maven",
            "REST APIs",
            "Object-Oriented Programming",
            "Data Structures & Algorithms",
            "Collections",
            "Multithreading",
        ],
    },
    {
        title: "Frontend Development",
        description: "Creating responsive, component-based web interfaces and connecting them to application services.",
        icon: faReact,
        skills: ["JavaScript", "React.js", "HTML", "CSS"],
    },
    {
        title: "Databases & Developer Tools",
        description: "Working with relational data, source control, API testing, containerization, and cloud deployment tools.",
        icon: faDatabase,
        skills: [
            "MySQL",
            "PostgreSQL",
            "SQL",
            "Git",
            "GitHub",
            "Postman",
            "Maven",
            "Docker",
            "AWS EC2",
            "Vercel",
            "IntelliJ IDEA",
            "Eclipse",
            "VS Code",
        ],
    },
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills &amp; Expertise</h1>
            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div className="skill" key={group.title}>
                        <FontAwesomeIcon icon={group.icon} size="3x" />
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {group.skills.map((skill) => (
                                <Chip key={skill} className="chip" label={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;