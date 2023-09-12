function sendMail(){
    var params = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        message:document.getElementById('message').value, 
    };

const serviceID = 'service_3ix0v4b';
const templateID ='template_sfgioqp';

emailjs
.send(serviceID,templateID,params)
.then((res) => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        console.log(res);
        alert('Your message has been sent!');
    })
.catch((err) => console.log(err));
}

