// instanciates buttons, urls and title to change the design and send params
let btn = document.getElementById('btn-send');
let btn_change = document.getElementById('btn-change');
let url = 'http://127.0.0.1:8000/get-Results';
let title = document.getElementById('title');


/*------ a function to check if the switchers are checked or not    ------- */
function check(l) {
    if (l.checked) {
        return 1
    }
    return 0
}


/* then i use the var cont to know which theme is showed to the client the first one is for the entries
and the second on for exits if you click the button the cont will change the valut to 1 which means after the click the current theme that appears is the exits
 */
let cont = 0;
btn_change.addEventListener('click', function () {
    if(cont ==1){
        title.innerText = 'Predicción de Entradas';
        btn_change.innerText = 'Cambiar a salidas';
        cont=0;
    }
    else{
        cont++;
        title.innerText = 'Predicción de Salidas';
        btn_change.innerText = 'Cambiar a entradas';
    }
})

/* finally this button is the submit button which gets all params from inputs and send it to the api rest
with an object that has all params through a post request, after the request is done, it gets the results 
and if there's not an error it will show you the result, however if the client don't put all params it gives you an error with a message*/
btn.addEventListener('click', function () {
    let parking = document.getElementById('parking').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value
    let festivo = document.getElementById('festivo')
    let lectivo = document.getElementById('lectivo')
    let temp = document.getElementById('temperatura').value
    let hum = document.getElementById('humedad').value
    let day_week = document.getElementById('semana').value
    festivo = check(festivo);
    lectivo = check(lectivo);
    fecha = fecha.split('-');
    request = {
        "parking": parseInt(parking),
        "day": parseInt(fecha[2]),
        "month": parseInt(fecha[1]),
        "year": parseInt(fecha[0]),
        "hour": parseInt(hora),
        "school_day": lectivo,
        "holiday": festivo,
        "temperature": parseInt(temp),
        "humidity": parseInt(hum),
        "day_week": parseInt(day_week),
        "type": cont
    }
    console.log(request)
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
                    if(result[1] == 0){
                        Swal.fire({
                            title: 'Resultado',
                            icon: 'success',
                            text: 'La precisión ha sido de: ' + result[0] + ' entradas.',
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
                            text: 'La precisión ha sido de: ' + result[0] + ' salidas.',
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