window.addEventListener('DOMContentLoaded', () => {

    const BOARD_NUMBER = 500;
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
    let board = document.querySelector('#board');

    for (let i = 0; i < BOARD_NUMBER; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.append(square);

        square.addEventListener('mouseover', () => {
            setColor(square);

        })

        square.addEventListener('mouseleave', () => {
            removeColor(square);

        })
    }



    function setColor(elem) {
        const color = getRandomColor()
        elem.style.backgroundColor = color
        elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(elem) {
        elem.style.backgroundColor = '#1d1d1d'
        elem.style.boxShadow = 'none'
    }

    function getRandomColor () {
        const index = Math.floor(Math.random() * colors.length); // получаем рандомный индекс из всего массива
        return colors[index];
    }


}) 