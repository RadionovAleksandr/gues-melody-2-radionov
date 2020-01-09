import axios from 'axios';

const STATUS_ERROR = 403;

const baseURL = `https://es31-server.appspot.com/guess-melody`;
const timeout = 5000;

export const createAPI = (onLoginFail) => {
    const api = axios.create({
        baseURL,
        timeout,
        withCredentials: true,
    });

    const onSuccess = (response) => {
        return response;
    };
    const onFail = (err) => {
        if (err.response.status === STATUS_ERROR) {
            onLoginFail();
        }
        return err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
};

const checkBoxes = document.querySelectorAll('input')
checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi!')))

// const onClickButton = (tagName, function) => {
//   let buttons = document.querySelectorAll(tagName)
//   buttons.forEach(input => input.addEventListener('click', function()))
// }

document.querySelector('#fakebox-text').innerText = ''
const onClickButton = (myFunction, className) => {
    let buttons = document.querySelectorAll(className)
    buttons.forEach(input => input.addEventListener('click', myFunction(className)))
}

const buttonAction = (className) => {
    const temp = document.querySelector(className)
    if (temp.innerText !== '') {
        console.log(1)
        return temp.innerText += 1
    } else {
        console.log(2)
        return temp.innerText = 0
    }
};

onClickButton(buttonAction('#fakebox-text'))