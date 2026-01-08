import React from 'react';

const Hero = () => {
    return (
        <section id="about" className="section container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="font-mono text-accent" style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                Hi, my name is
            </p>

            <h1 style={{ fontSize: 'clamp(20px, 8vw, 80px)', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 0, marginBottom: '10px' }}>
                M.Nataraj
            </h1>

            <h2 style={{ fontSize: 'clamp(30px, 6vw, 60px)', fontWeight: 'bold', color: 'var(--text-secondary)', lineHeight: 1.1, marginBottom: '30px' }}>
                I build things for the web
            </h2>

            <div className="glass-card font-mono" style={{ maxWidth: '600px', marginBottom: '50px', background: 'rgba(2, 12, 27, 0.7)' }}>
                <p style={{ color: 'var(--accent)', margin: 0 }}>
                    <span style={{ color: '#c792ea' }}>const</span> <span style={{ color: '#ffcb6b' }}>developer</span> = {'{'}
                </p>
                <p style={{ margin: '5px 0 5px 20px', color: 'var(--text-primary)' }}>
                    name: <span style={{ color: '#c3e88d' }}>'M.Nataraj'</span>,
                </p>
                <p style={{ margin: '5px 0 5px 20px', color: 'var(--text-primary)' }}>
                    role: <span style={{ color: '#c3e88d' }}>'Full-Stack , Business Analyst'</span>,
                </p>
                <p style={{ margin: '5px 0 5px 20px', color: 'var(--text-primary)' }}>
                    status: <span style={{ color: '#c3e88d' }}>'Building the future'</span>
                </p>
                <p style={{ color: 'var(--accent)', margin: 0 }}>{'}'};</p>
            </div>

            <p style={{ maxWidth: '540px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '50px' }}>
                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </p>

            <div>
                <a href="#projects" className="btn" style={{ padding: '18px 28px', fontSize: '1rem' }}>Check out my work!</a>
            </div>
        </section>
    );
};

export default Hero;
