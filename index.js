var rightArrow = window.document.getElementById('right-arrow')
var Leonardo = window.document.getElementById('leonardo')
var Samantha = window.document.getElementById('samantha')
var Bruna = window.document.getElementById('bruna')
var leftArrow = window.document.getElementById('left-arrow')

function RollToRight() {
    Leonardo.style = 'display:none'
    Bruna.style = 'display:flex'
    rightArrow.style = 'display:none'
    leftArrow.style = ' display:flex; margin-top: 55px'
}

function RollToLeft () {
    Leonardo.style = 'diplay: flex'
    Bruna.style = 'display: none'
    rightArrow.style = 'display: flex; margin-top: 55px'
    leftArrow.style = 'display: none'
}