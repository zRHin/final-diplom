/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    let url = options.url;
    let data;
    if (options.method === 'GET') {
        const currentURL = window.location.href;
        url = new URL(currentURL.slice(0, -1) + options.url);
        if (options.data) {
            for (let key in options.data) {
                url.searchParams.set(key, options.data[key]);
            }
        }
    } else {
        data = new FormData;
        if (options.data) {
            for (let key in options.data) {
                data.append(key, options.data[key]);
            }
        }
    }

    try {
        xhr.open(options.method, url);
        xhr.responseType = 'json';
        xhr.send(data);
    }
    catch (err) {
        callback(err);
    }

    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            options.callback(null, xhr.response);
        } else {
            options.callback(xhr.statusText, null);
        }
    });
};
