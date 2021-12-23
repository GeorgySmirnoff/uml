const myEmail = localStorage.getItem('email');
if(myEmail != null){
    const entrance = document.getElementsByClassName('header__entrance_button')
    entrance[0].innerHTML = myEmail
}

createPizza.onclick = function() {
    event.preventDefault();
    alert(`Для создания собственной пиццы звоните по номеру: +7(965)786-14-96`)
}