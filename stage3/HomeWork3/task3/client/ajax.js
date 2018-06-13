setInterval(function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                alert( xhr.status + ': ' + xhr.statusText ); // обработать ошибку
            } else {
                var data = JSON.parse(xhr.responseText); // вывести результат
                document.getElementById("aforizm").innerHTML = data.content; 
            }
    };
    xhr.open("GET", 'http://localhost:8080/', true);
    xhr.send();

}, 8000);