function responseYes() {
    alert('Estamos namorando!!! (;  ');
}

function responseNo() {
    const buttonNo = document.getElementById('no');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonWidth = buttonNo.offsetWidth;
    const buttonHeight = buttonNo.offsetHeight;

    const maxX = screenWidth - buttonWidth;
    const maxY = screenHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    buttonNo.style.left = `${randomX}px`;
    buttonNo.style.top = `${randomY}px`;
}