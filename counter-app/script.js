document.querySelector('.increment-button').addEventListener('click', function() {
    let count = parseInt(document.querySelector('.counter-value').innerText);
    count++;
    document.querySelector('.counter-value').innerText = count;
});

document.querySelector('.decrement-button').addEventListener('click', function() {
    let count = parseInt(document.querySelector('.counter-value').innerText);
    count--;
    document.querySelector('.counter-value').innerText = count;
});