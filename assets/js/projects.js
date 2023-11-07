// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();

// app.post('/contact',(req,res)=>{
//     const {name,email,message} = req.body;

//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'arundhatib.work@gmail.com',
//             pass: 'mithi131014',
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: 'arundhatib.work@gmail.com',
//         subject: 'Portfolio contact submission',
//         text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
//     };

//     transporter.sendMail(mailOptions, (error,info) => {
//         if (error) {
//             alert(error);
//             console.log(error);
//             res.status(500).send('Error sending email');
//         }
//         else{
//             console.log('Email sent: ',info.response);
//             alert('Email sent: ',info.response);
//             res.send('Email sent successfully');
//         }
//     });
// });

// app.use(express.json());
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })

var images = ['images/projects/pic01.jpg','images/projects/pic02.jpg','images/projects/pic03.jpg'];
var headers = ['Project 1', 'Project 2', 'Project 3'];
var details = ['Project 1 details', 'Project 2 details', 'Project 3 details'];
var projectLinks = ['http://www.google.com','https://www.facebook.com','https://www.github.io'];
var counter = 1;
var frame, header, detail, projectLink;
frame = document.getElementById('project-img');
header = document.getElementById('project-header');
detail = document.getElementById('project-details');
projectLink = document.getElementById('project-link');

var leftBtn = document.getElementById('left-scroll-btn');
var rightBtn = document.getElementById('right-scroll-btn');

var projects = [
    {
        id:1,
        header: 'Flipcart',
        frame: 'https://arundhati-work.github.io/flipcart/',
        details: 'I developed the "Flipcart" e-commerce application, leveraging a stack of HTML, CSS, JavaScript, React, Redux, and react-router-dom. This project showcases my proficiency in front-end technologies and state management. "Flipcart" is a fully functional online store, offering a diverse range of products, including furniture, electronics, clothing, and jewelry. I designed and implemented intuitive user interfaces, integrated Redux for efficient state management, and utilized React Router for seamless navigation. This project reflects my ability to create dynamic, user-friendly web applications while demonstrating my expertise in modern web development tools and frameworks.',
        link: 'https://arundhati-work.github.io/flipcart/',
    },
    {
        id:2,
        header: 'Parsley',
        frame: 'https://arundhati-work.github.io/parsley/',
        details: 'I crafted a captivating landing page for the fictitious small business "Parsley," specializing in online furniture sales. The design exudes a cozy, natural, and minimalistic theme, which I brought to life using HTML, CSS, JavaScript, React, and React-router-dom. This project exemplifies my ability to create visually appealing and user-friendly web interfaces that resonate with a brand\'s unique identity.',
        link: 'https://arundhati-work.github.io/parsley/',
    },
    {
        id:3,
        header: 'Project 3',
        frame: 'images/projects/pic02.jpg',
        details: 'Project 3 details',
        link: 'https://www.github.io',
    }
]


function changeValues(){
    var project = projects.find((pro) => pro.id === counter);
    frame.src = project.frame;
    header.innerText = project.header;
    detail.innerText = project.details;
    projectLink.href = project.link;
}


function leftScrollHandler(){
    counter = counter - 1;
    rightBtn.disabled = false;
    if (counter === 0)
        leftBtn.disabled = true;
    else
        leftBtn.disabled = false;
    changeValues();
}

function rightScrollHandler(){
    counter = counter + 1;
    leftBtn.disabled = false;
    if (counter === projects.length) {
        rightBtn.disabled = true;
    }
    else{
        rightBtn.disabled = false;
    }
    changeValues();
}

