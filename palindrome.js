document.forms.palindrome.addEventListener('submit', handleFormSubmit);

function handleFormSubmit() {
    event.preventDefault();
    let formData = new FormData(this),
        response = formResponse(formData);
    if(response?.hasError) return alert(response.msg);

    return this.querySelector('#result').textContent = response.msg;
}

function formResponse(data) {
    let originalValue = data.get('text-input'),
        value = sanitizeData(data).get('text-input'),
        msg = 'Please input a value',
        formIsEmpty = !value.length;
    if(formIsEmpty) return {"hasError" : true, "msg": msg};

    msg = originalValue + ' is ' + (Array.from(value).toString() === Array.from(value).reverse().toString() ? '' : 'not ') + 'a palindrome';

    return {"success" : true, "msg": msg};
}

function sanitizeData(data) {
    for (var pair of data.entries()) {
        data.set(pair[0], pair[1].replace(/[^a-zA-Z0-9]/g, '').toLowerCase());
    }
    return data;
}
