let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']

shoppingList.push('fruit loops')

shoppingList[4] = 'fair trade coffee';

shoppingList[2] = 'rice'
shoppingList[3] = 'beans'

let shoppingCart = []

let lastitem = shoppingList.pop()
let firstitem = shoppingList.pop()

shoppingCart.push(lastitem)
shoppingCart.push(firstitem)

while (shoppingList.length > 0){
    let item = shoppingList.pop()
    shoppingCart.push(item)
}

shoppingCart.sort()
shoppingCart.reverse()

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Shopping List${i + 1}: ${shoppingList[i]}`); 
            }
            
for (let i = 0; i < shoppingCart.length; i++) {
console.log(`Shopping Cart ${i + 1}: ${shoppingCart[i]}`); 
                        }