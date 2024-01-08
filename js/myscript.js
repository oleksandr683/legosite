console.log("Start")
let cartBody = document.getElementById('cart')

window.addEventListener('click',(event) =>{
    console.log('click');

    if(event.target.classList.contains('button-buy')){
        console.log('Клік на кнопку');
        addItems(event.target);
    }
    if(event.target.classList.contains('deleteItems')){
        console.log('Клік на кнопку видалення товару');
        deleteItems(event.target);
    }
})

function addItems(element){
    console.log('додати до кошика');
    let li = document.createElement('li');
    li.innerHTML = element.dataset.img
    + element.dataset.name
    + element.dataset.price
    + '<div class="deleteItems"> X </div>'
    cartBody.appendChild(li);
    addCartToForm(element.dataset.id)

    M.toast({html: 'Товар додано до кошика', classes: 'rounded'});
}

function deleteItems(element){
    console.log('видалення товару');
    element.parentNode.remove();
}

let inputCart = document.getElementById('cartFF');

function addCartToForm(id){
    inputCart.value += id + ", ";
}
