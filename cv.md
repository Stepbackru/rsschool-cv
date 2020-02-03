1. **Alexander Rybakov**
2. **Contact Info:**
    - Email: alex-ruba@bk.ru
    - Skype: gh0strus
    - Discord: Step^back#9640
    - [vk.com](https://vk.com/gh0strus)
3. **Summary:**
All my life I wanted to start programming and engage in development, at the age of 14 I started studying HTML and knew the basics, but later abandoned it. This year my life has changed a lot and I got an irresistible desire to study and develop in the field of web development and not only, I went to courses and studied several disciplines at once, it was difficult, I combined work, several homework at once, loaded myself to the maximum, to learn more and here, on the advice of my friend, I heard about the company, where I want to go, in order to develop professionally.
4. **Skills:**
    * HTML4-5
        - Native
        - Pug
    * CSS3
        - Native
        - Stylus
        - SCSS
    * JavaScript
        - jQuery
        - NodeJS
        - React
        - Redux
        - React-router
    * Web mastering
        - Apache
        - nginx
        - And so on..
    * Git (basics)
    * Methodologies:
        - BAM(Yandex)
        - OOCSS
        - Atomic CSS
    * Soft:
        - Visual Studio Code
        - WebStorm (basics)
    * Dаtabases:
        - MySQL 8
        - MongoDB (basics)
5. **Example of my code:**
    ```javascript
    const express = require('express');
    const socketIO = require('socket.io');

    const app = express();
    const io = socketIO.listen(app.listen(8080));

    app.set('views', __dirname + '/tpl');
    app.set('view engine', 'pug');
    app.engine('pug', require('pug').__express);

    app.use(express.static(__dirname + '/public'));

    app.get('/', function(req,res){
        res.render('page'); // Добавили страницу pug
    });

    io.sockets.on('connection', function(client){
        console.log('Connected');
        client.emit('message', { message: 'Добро пожаловать в чат!' });
        client.on('send', function(data){
            io.emit('message', data);
        });
    });
    ```
6. **Experience:**
I went through 8 courses that relate to front-end and back-end web development and almost all my work is in [this repository](https://github.com/Stepbackru/Study-front-end)
    But at one of the courses there was the final task of page layout according to the psd layout (which the teacher gave us) for the speed among students, I completed the work first and the teacher posted it on his resource, it is [available here](https://petiteweb.ru/vinners/rybakov/)
7. **Education:**
    - Complete secondary Education
    - I am currently a correspondence student of Russian State Agrarian University - Moscow Timiryazev Agricultural Academy
    - I completed 11 full-time courses at the Computer Training Center «Specialist» at Bauman MSTU (There are certificates on the successful completion of each course and I attach links to the description of each course):
        - [HTML and CSS. Level 1. Creation of sites in HTML 5 and CSS 3](https://www.specialist.ru/course/eichtml-b)
        - [HTML and CSS. Level 2. Advanced CSS](https://www.specialist.ru/course/ashtml2-a)
        - [HTML and CSS. Level 3 Advanced methodologies and tools typesetting](https://www.specialist.ru/course/ashtml3)
        - [JavaScript. Level 1. Web-Development fundamentals](https://www.specialist.ru/course/oprveb-a)
        - [Jаvаscriрt. Lеvеl 2. Extendеd cоurse](https://www.specialist.ru/course/dzhsk-b)
        - [JavaScript. Level 3a. jQuery Library.](https://www.specialist.ru/course/kveri)
        - [JavaScript. Level 3в. Server-side programming with Node.js](https://www.specialist.ru/course/node)
        - [Web-mastering](https://www.specialist.ru/course/vem-v)
8. **English:**
I study English from school, I also went to courses for some time, in the same courses my level of English was determined, it is level A2, closer to level B1