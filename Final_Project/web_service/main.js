// instanciates button and url
let btn = document.getElementById('btn-send');
let url = 'http://127.0.0.1:8000/get-Results';


/*------ a function to check if the switchers are checked or not    ------- */
function check(l) {
    if (l.checked) {
        return 1
    }
    return 0
}

/* this listener is used to get all neccesary parameters to send a request to the API and see the result, base on asynchonous ajax request*/
btn.addEventListener('click', function () {
    let age = document.getElementById('age').value
    let job = document.getElementById('job').value
    let education = document.getElementById('education').value
    let marital = document.getElementById('marital').value
    let cash_default = document.getElementById('default')
    let balance = document.getElementById('balance').value
    let housing = document.getElementById('housing')
    let loan = document.getElementById('loan')
    let contact = document.getElementById('contact').value
    let fecha = document.getElementById('fecha').value
    let duration = document.getElementById('duration').value
    let campaign = document.getElementById('campaign').value
    let pdays = document.getElementById('pdays').value
    let previous = document.getElementById('previous').value
    let poutcome = document.getElementById('poutcome').value
    loan = check(loan)
    housing = check(housing)
    cash_default = check(cash_default)
    let day = fecha.split('-')[2]
    let month = fecha.split('-')[1]
    request = {
        'age': age,
        'job': job,
        'education': education,
        'marital': marital,
        'default': cash_default,
        'balance': balance,
        'contact' : contact,
        'housing': housing,
        'loan': loan,
        'day': day,
        'month': month,
        'duration': duration,
        'campaign': campaign,
        'pdays': pdays,
        'previous': previous,
        'poutcome': poutcome,
    }
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(request)
    })
        .then(function (response) {
            if (response.status == 422) {
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: 'Comprueba los parámetros.',
                    showCloseButton: true,
                })
            }
            else {
                promise = response.json()
                promise.then(function (result) {
                    if(result[0] ==1){
                        Swal.fire({
                            title: 'Resultado',
                            icon: 'success',
                            text: 'El cliente comprará el producto ofrecido.',
                            showCloseButton: true,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                    else{
                        Swal.fire({
                            title: 'Resultado',
                            icon: 'success',
                            text: 'El cliente no comprará el producto ofrecido.',
                            showCloseButton: true,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                  
                });
            }
        })
        .catch(function (response) {
            console.log(response);
        })
});