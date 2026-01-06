document.querySelector('.change-color-red').addEventListener('click', () => {
    document.querySelector('.color-box').style.backgroundColor = 'red';
    document.querySelector('.color-box').innerHTML = 'This is red!';
});
document.querySelector('.change-color-yellow').addEventListener('click', () => {
    document.querySelector('.color-box').style.backgroundColor = 'yellow';
    document.querySelector('.color-box').innerHTML = 'This is yellow!';
});
document.querySelector('.change-color-green').addEventListener('click', () => {
    document.querySelector('.color-box').style.backgroundColor = 'green';
    document.querySelector('.color-box').innerHTML = 'This is green!';
});
document.querySelector('.change-color-blue').addEventListener('click', () => {
    document.querySelector('.color-box').style.backgroundColor = 'blue';
    document.querySelector('.color-box').innerHTML = 'This is blue!';
});