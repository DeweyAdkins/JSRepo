const eren = document.getElementById('list').querySelector('li:nth-child(2)') 
eren.innerHTML = 'Granny Smith Apples'

const armored = document.getElementById('list').querySelector('li:nth-child(4)')
armored.remove()

const komboucha = document.createElement('li')
komboucha.innerHTML = 'Kombucha';
const shoppinglist = document.getElementById('list')
shoppinglist.appendChild(komboucha)

while (shoppinglist.children.length > 0){
    shoppinglist.children[0].remove()
}

function fillList() {
    let supplements = ['protein powder', 'almonds', 'prenut butter'];
    supplements.forEach(function(x){
        shoppinglist.appendChild(document.createElement('li'));
        shoppinglist.children[supplements.indexOf(x)].innerHTML = x
    })
}

fillList()
shoppinglist.children[1].setAttribute('class', 'important')
console.log(shoppinglist)