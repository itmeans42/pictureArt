const forms = () => {

    const sendForm = (elem) => {

        let form = elem,
            input = elem.querySelectorAll('input'),
            statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');

        form.addEventListener('submit', (event) => {
            let innerCode;
            event.preventDefault();

        let formData = new FormData(elem),
            obj = {};

            formData.forEach((value, key) => {
                obj[key] = value;
            });

        let json = JSON.stringify(obj);

            const postData = () => {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php'); 
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    innerCode = form.innerHTML;
                    form.innerHTML = '';
                    form.appendChild(statusMessage);

                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }

                    });//request
                    request.send(json);
                });// return new Promise
            } //postData

            const clearInput = () => {
                input.forEach((elem) => {elem.value = ''})
            }
            const hideForm = (status) => {
                statusMessage.innerHTML = status;
                let timeLog = 0;
                let hideFormTimer = setInterval(function() {
                    timeLog = timeLog + 20;
                    if (timeLog == 2000) {
                        form.innerHTML = innerCode;
                        clearInput();
                        if (form.className.indexOf('popup') != -1) {
                            let popupClass = document.querySelector('.' + form.className.slice(0, -5));
                            popupClass.style.display = 'none';
                            document.querySelector('body').style.overflow = '';
                        }
                        clearInterval(hideFormTimer);
                    }
                }, 20);
            }
            postData()
                    .then(() => {
                        hideForm('<p>Отправляем...</p>');
                    })
                    .then(() => {
                        hideForm('<p>Сообщение отправлено.<br> Ожидайте звонка.</p>');
                    })
                    .catch(() => {
                        hideForm('<p>Ошибка!</p>');
                    })
        });
    }
    let popupForms = document.querySelectorAll('#form-design, #form-consult, #form-bottom');
        popupForms.forEach((elem) => {sendForm(elem)});
}
module.exports = forms;