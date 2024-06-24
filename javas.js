const trunks = document.querySelector('header')
const gohan = document.querySelectorAll('section')
const gotenks = document.querySelector('section.current')
const goku = gotenks.nextElementSibling
const vegeta = gotenks.previousElementSibling.querySelector('h2')
const freiza = document.querySelector('h2.highlight').closest('div')
const piccolo = Array.from(document.querySelectorAll('h2')).map(function(h2) { return h2.parentElement})

console.log(trunks)
console.log(gohan)
console.log(gotenks)
console.log(goku)
console.log(freiza)
console.log(piccolo)