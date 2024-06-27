// quais açoes meu carrinho pode fazer

//casos de uso
// ✔ => adicionar item no carrinho 
async function addItem(userCart, item){
    userCart.push(item);
}

// => calcular total
async function calculateTotal(userCart) {
    console.log("Shopee Cart TOTAL IS:");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

// => deletar item do carrinho
async function deleteItem(userCart ,name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// => remover um item - diminui um item
async function removeItem(userCart, item){
    //1. encontrar o indice do item
      const indexFound = userCart.findIndex((p) => p.name === item.name)
        
      //2. caso nao encontre o item
      if (indexFound === -1){
        console.log("item não encontrado");
      }
      //3. item > 1 subtrair um item, item = 1 deletar o item
      if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
      }

      //4. caso o item = 1 deletar o item
      if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
      }

    }


async function displaycart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price}  | ${item.quantity}x | subtotal = ${item.subtotal()}`);
    });
    }

export {  addItem, calculateTotal, deleteItem, removeItem, displaycart,
}