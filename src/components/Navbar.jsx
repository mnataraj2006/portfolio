import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none'
    };

    const linkStyle = {
        color: 'var(--text-primary)',
        marginLeft: '30px',
        fontSize: '0.9rem',
        textDecoration: 'none',
        transition: 'color 0.2s',
    };

    return (
        <nav style={navStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#about" style={linkStyle} className="nav-link"><span style={{ color: 'var(--accent)', marginRight: '5px' }}>01.</span>About</a>
                <a href="#projects" style={linkStyle} className="nav-link"><span style={{ color: 'var(--accent)', marginRight: '5px' }}>02.</span>Projects</a>
                <a href="#contact" style={linkStyle} className="nav-link"><span style={{ color: 'var(--accent)', marginRight: '5px' }}>03.</span>Contact</a>
                <a href="/resume.pdf" className="btn" style={{ marginLeft: '30px' }}>Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;
