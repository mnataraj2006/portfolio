import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "LifeShare – Connecting Blood, Saving Lives",
            description: "Blood donation portal connects donors, hospitals, and blood banks, managing registration, requests, inventory tracking, notifications, and secure coordination efficiently nationwide",
            tech: ["react.js", "node.js", "mongodb", "css"],
            github: "https://github.com/mnataraj2006/blood_bank-main-.git",
            live: "https://lifeshare-7le6.onrender.com",
            featured: true
        },
        {
            title: "MindMetrics: Measuring Student Stress Through Data",
            description: "Analyzes student stress using smartphone habits, sleep, GPA, and academics through data cleaning, regression, statistics, and interactive Power BI dashboards.",
            tech: ["Pandas", "MySQL", "PowerBI", "Matplotlib"],
            github: "https://github.com/mnataraj2006/student_stress_analysis.git",
            live: "https://mnataraj2006.github.io/stress_score_dashboard/",
            featured: true
        },
        /*
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for online retailers. Features include inventory management, sales analytics, and user role management.",
            tech: ["Next.js", "PostgreSQL", "Tailwind (migrated from CSS)"], // Just a joke or real content
            github: "#",
            live: "#",
            featured: false
        },
        {
            title: "Chat Application",
            description: "Real-time chat app with end-to-end encryption. Supports rooms, direct messaging, and file sharing.",
            tech: ["Node.js", "Socket.io", "React"],
            github: "#",
            live: "#",
            featured: false
        }*/
    ];

    return (
        <section id="projects" className="section container">
            <h2 className="section-title"><span className="text-accent font-mono">02.</span> Some Things I've Built</h2>

            <div className="bento-grid">
                {projects.map((project, index) => (
                    <div key={index} className="glass-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gridColumn: project.featured ? 'span 2' : 'span 1' // Basic bento logic
                    }}>
                        <header>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{ color: 'var(--accent)', fontSize: '2rem' }}>
                                    📂
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <a href={project.github} className="hover-link" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FaGithub /></a>
                                    <a href={project.live} className="hover-link" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FaExternalLinkAlt /></a>
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                                {project.title}
                            </h3>

                            <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.5, marginBottom: '20px' }}>
                                {project.description}
                            </div>
                        </header>

                        <footer>
                            <ul style={{ display: 'flex', gap: '15px', padding: 0, listStyle: 'none', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                {project.tech.map((tech, i) => (
                                    <li key={i} style={{
                                        background: 'rgba(100, 255, 218, 0.1)',
                                        color: 'var(--accent)',
                                        padding: '4px 8px',
                                        borderRadius: '12px'
                                    }}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </footer>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
