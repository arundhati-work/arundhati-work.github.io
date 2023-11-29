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
feedback = document.getElementById('feedback');

var leftBtn = document.getElementById('left-scroll-btn');
var rightBtn = document.getElementById('right-scroll-btn');

var projects = [
    {
        id:1,
        header: 'Mozaic.co',
        frame: 'https://arundhati-work.github.io/mozaic/',
        details: '"Mozaic" is a fictitious real estate enterprise, designed to unite investors for business projects. The brand embodies a sleek and minimalistic theme, crafted to emphasize the importance of both brand image and project excellence. The project is rooted in HTML, CSS, JavaScript, React, and React-router-dom.',
        link: 'https://arundhati-work.github.io/mozaic/',
        feedback: "mailto:arundhatib.work@gmail.com?subject=Feedback on Mozaic"
    },
    {
        id:2,
        header: 'Parsley',
        frame: 'https://arundhati-work.github.io/parsley/',
        details: '"Parsley" is a fictitious small business specializing in online furniture sales. The theme for the design is cozy, natural, and minimalistic, which was brought to life using HTML, CSS, JavaScript, React, and React-router-dom.',
        link: 'https://arundhati-work.github.io/parsley/',
        feedback: "mailto:arundhatib.work@gmail.com?subject=Feedback on Parsley"
    },
    {
        id:3,
        header: 'Little Lemon',
        frame: 'https://arundhati-work.github.io/little-lemon/',
        details: '"Little Lemon" is a fictitious restaurant whose website was built as part of the Meta Front-end Developer Professional Certification. The project includes a responsive landing page and a table reservation system, built using HTML, CSS, JavaScript, React and the Formik library (for form validation).',
        link: 'https://arundhati-work.github.io/little-lemon/',
        feedback: "mailto:arundhatib.work@gmail.com?subject=Feedback on Little Lemon"
    },
    {
        id:4,
        header: 'Flipcart (WORK IN PROGRESS)',
        frame: 'https://arundhati-work.github.io/flipcart/',
        details: '"Flipcart" is an e-commerce application, leveraging a stack of HTML, CSS, JavaScript, React, Redux, and react-router-dom. The idea is to build an online store, offering a diverse range of products, including furniture, electronics, clothing, and jewelry. This project is still a work in progress but you\'re free to look around and track my progress.',
        link: 'https://arundhati-work.github.io/flipcart/',
        feedback: "mailto:arundhatib.work@gmail.com?subject=Feedback on Flipcart"
    },
]


function changeValues(){
    var project = projects.find((pro) => pro.id === counter);
    frame.src = project.frame;
    header.innerText = project.header;
    detail.innerText = project.details;
    projectLink.href = project.link;
    feedback.href = project.feedback;
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

