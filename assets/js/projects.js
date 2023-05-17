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
var counter = 0;
var image, header, detail, projectLink;


function changeValues(){
    image = document.getElementById('project-img');
    image.src = images[counter];
    header = document.getElementById('project-header');
    header.innerText = headers[counter];
    detail = document.getElementById('project-details');
    detail.innerText = details[counter];
    projectLink = document.getElementById('project-link');
    projectLink.href = projectLinks[counter];
}


function leftScrollHandler(){
    counter = counter - 1;
    if (counter==-1) 
        counter = images.length-1;
    changeValues();
}

function rightScrollHandler(){
    counter = counter + 1;
    if (counter==images.length) counter = 0;
    changeValues();
}

