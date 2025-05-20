import React, {useState, useEffect, useRef} from 'react';
import './ScrollComponent.css';
import Landing from '../Landing/Landing';
import Project from '../Project/Project';
import SoulScoutsImage from '../../assets/projects-images/soulscouts.png';
import HyperesumeImage from '../../assets/projects-images/hyperesume.png';
import Footer from '../Footer/Footer';

const projectData = [
    {
        'id': 1,
        'title': 'SoulScouts',
        'image': SoulScoutsImage,
        'summary': 'an employee mental wellness tracker',
        'description': 'A comprehensive web-based platform that combines personal wellness tracking with anonymous support systems, while providing actionable insights to HR teams. The solution focusses on three key user groups: Employees, HR teams and Mental Wellness Coaches.',
        'skills': ['MongoDB','React','JWT','Express','Node', 'Redux', 'Axios',  'Figma', 'Git'],
        'github': 'https://github.com/arundhati-work/SoulScouts'
    },
    {
        'id': 2,
        'title': 'Hyperesume',
        'image': HyperesumeImage,
        'summary': 'a resume builder for job seekers',
        'description': 'Hyperesume is a full-featured resume builder application with multiple templates to choose from, designed to help job seekers create professional, customized resumes. It features role-based authentication for users and admin, resume management, PDF export, admin dashboard and responsive design.',
        'skills': ['React', 'SpringBoot', 'Tailwind', 'JWT', 'MyBatis', 'MySQL', 'Axios', 'Figma', 'Git'],
        'github': 'https://github.com/arundhati-work/hyperesume'
    },
]

const ScrollComponent = () => {
    const pages = [
        {'content': <Landing/>, index: 0},
        {'content': <Project data={projectData[0]}/>, index: 1},
        {'content': <Project data={projectData[1]}/>, index: 2},
        {'content': <Footer/>, index: 3},
    ];

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, {
          threshold: 0.1,
        });
    
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));
    
        return () => {
          elements.forEach(el => observer.unobserve(el));
        };
      }, []);
      


    return (
        <div id='fullpage-container'>
            <div className="pages-wrapper">
                {
                    pages.map((page, index) => (
                        <div key={index} className='page reveal'>
                            <div className='page-content'>
                                {page.content}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ScrollComponent;