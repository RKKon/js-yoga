function form() {
    let message = {
        loading: 'Loading...',
        success: 'Thank you! Soon we will call you.',
        failure: 'Sorry something went wrong', 
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formContacts = document.querySelector('#form');
        
        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //вместо JSON
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 

        let formData = new FormData(form);

        let obj = {}; // используется при др манипуляциях но и для JSON
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); 

        request.send(json);

        // Для наблюдения за изменениями сос-ния нашего запроса
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
                //     let data = JSON.parse(request.response); 
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    formContacts.addEventListener('submit', function(event) {
        event.preventDefault();
        formContacts.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //вместо JSON
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 

        let formData = new FormData(form);

        let obj = {}; // используется при др манипуляциях но и для JSON
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); 

        request.send(json);

        // Для наблюдения за изменениями сос-ния нашего запроса
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
                //     let data = JSON.parse(request.response); 
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
}

export default form;