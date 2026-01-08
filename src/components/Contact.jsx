import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '100px' }}>
            <p className="font-mono text-accent">03. What’s Next?</p>
            <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', margin: '20px 0' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.5, marginBottom: '50px' }}>
                I'm currently looking for new opportunities to join a team of creative developers. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:mnataraj2108@gmail.com" className="btn" style={{ padding: '20px 30px', fontSize: '1.1rem' }}>
                Say Hello
            </a>

            <footer style={{ marginTop: '100px', fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                <p>Designed & Built by M.Nataraj</p>
            </footer>
        </section>
    );
};

export default Contact;
