document.querySelector('.increment-button').addEventListener('click', function() {
    document.querySelector('.message').innerText = "Message will display here!";
    let count = parseInt(document.querySelector('.counter-value').innerText);
    count++;
    document.querySelector('.counter-value').innerText = count;
});

document.querySelector('.decrement-button').addEventListener('click', function() {
    document.querySelector('.message').innerText = "Message will display here!";
    let count = parseInt(document.querySelector('.counter-value').innerText);
    count--;
    if(count < 0) {
        count = 0;
        document.querySelector('.message').innerText = "Counter cannot go below zero!";
    }
    document.querySelector('.counter-value').innerText = count;
});

document.querySelector('.reset-button').addEventListener('click', function() {
    if( parseInt(document.querySelector('.counter-value').innerText) === 0 ) {
        document.querySelector('.message').innerText = "Counter is already at zero.";
        return;
    }
    document.querySelector('.message').innerText = "Counter has been reset.";
    document.querySelector('.counter-value').innerText = 0;
});

document.querySelector('.save-button').addEventListener('click', function() {
    let counter = document.querySelector('.counter-value').innerText;
    document.querySelector('.message').innerText = `${counter} value saved successfully!`;
    document.querySelector('.counter-value').innerText = 0;
});