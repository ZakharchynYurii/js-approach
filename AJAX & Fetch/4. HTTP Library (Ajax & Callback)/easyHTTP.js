function easyHTTP(){
    this.http = new XMLHttpRequest();
}

// METHOD GET
// ОБОВ'ЯЗКВА ПЕРЕВІРКА СТАТУСУ 200
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    this.http.onload = () => {
        if(this.http.status === 200){
            callback(null, this.http.responseText);
        }else{
            callback('Error: ' + this.http.status)
        }
    }

    this.http.send();
}

// METHOD POST
// ОБОВ'ЯЗКВО setRequestHeader ТА data ЯКА БУДЕ ВІДПРАВЛЕНА
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json')

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// METHOD PUT
// ОБОВ'ЯЗКВО setRequestHeader ТА data ЯКІ БУДУТЬ ОНОВЛЕНІ
easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// METHOD DELETE
// ОБОВ'ЯЗКВА ПЕРЕВІРКА СТАТУСУ 200
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    this.http.onload = () => {
        if(this.http.status === 200){
            callback(null, this.http.responseText);
        }else{
            callback('Error: ' + this.http.status);
        }
    }

    this.http.send();
}

