fetch('https://api.openweathermap.org/data/2.5/weather?q=Novosibirsk&onecall&appid=23e1b95b61f842661c565484491c9791&lang=ru')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.description').textContent = data.weather[0]['description'];
        document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
        document.querySelector('.wind').textContent = 'Ветер: ' + data.wind['speed'] + 'м/с';
        document.querySelector('.humidity').textContent = 'Влажность: ' + data.main['humidity'] + '%';
       
    })
    .catch(function (error) {
        alert('Данные не отобразились, нажмите кнопку обновить: ', error.message);
    });


    


