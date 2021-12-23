const elem = document.getElementsByClassName('main__container');

let allBasket = {};
let numberTov = 0
const info = localStorage.getItem('basket')
if (info != null) {
    allBasket = JSON.parse(info);
    numberTov = allBasket.price / 399
    elem[0].innerHTML = `
    <div style="margin: 100px 0 500px; font-size: 34px;">
        <div style="vertical-align: middle; display: flex; flex-direction: row; align-items: center; font-size: 24px;">
            <div>1)</div>
            <img  src="https://user80515.clients-cdnnow.ru/2b-ru/1601564989213_392x320.jpeg" height="80px" alt="" style="padding: 0 0 0 30px">
            <div style="margin: 0 150px">Цена: ${allBasket.price}</div>
            <button id="minus" style="margin: 0 50px" onClick={minus()}>
            <img src="../img/54601.png" height="40px">
            </button>
            <div style="margin: 0 10px">${numberTov}</div>
            <button id="plus" style="margin: 0 50px" onClick={plus()}>
            <img src="../img/304947.svg" height="40px">
            </button>
        </div>
        <div style="padding-top: 100px">
            Итого: ${allBasket.price}
        </div>
        <div style="vertical-align: middle; display: flex; flex-direction: row; align-items: center; font-size: 24px;">
            <div style="padding-top: 100px; padding-right: 100px">
            <button id="deleteBasket"style="font-size: 40px" onClick={deleteBasket()}>Очистить корзину</button>
            </div>
            <div style="padding-top: 100px;">
            <button id="deleteBasket"style="font-size: 40px" onClick={goBasket()}>Продолжить оформление</button>
            </div>
        </div>
    </div>
    `;
}
else {
    elem[0].innerHTML = `<div style="margin: 100px 0 500px; font-size: 34px">Ваша корзина пуста</div>`;
}




// const headPrice = document.getElementsByClassName("header__price");


function minus () {
    if(allBasket.price > 399){

    event.preventDefault()
    console.log(1);
    allBasket.price -= 399;
    headPrice[0].innerHTML = `${allBasket.price} РУБ.`
    localStorage.setItem('basket', JSON.stringify(allBasket))
    numberTov = allBasket.price / 399
    elem[0].innerHTML = `
    <div style="margin: 100px 0 500px; font-size: 34px;">
        <div style="vertical-align: middle; display: flex; flex-direction: row; align-items: center; font-size: 24px;">
            <div>1)</div>
            <img  src="https://user80515.clients-cdnnow.ru/2b-ru/1601564989213_392x320.jpeg" height="80px" alt="" style="padding: 0 0 0 30px">
            <div style="margin: 0 150px">Цена: ${allBasket.price}</div>
            <button id="minus" style="margin: 0 50px" onClick={minus()}>
            <img src="../img/54601.png" height="40px">
            </button>
            <div style="margin: 0 10px">${numberTov}</div>
            <button id="plus" style="margin: 0 50px" onClick={plus()}>
            <img src="../img/304947.svg" height="40px">
            </button>
        </div>
        <div style="padding-top: 100px">
            Итого: ${allBasket.price}
        </div>
        <div style="vertical-align: middle; display: flex; flex-direction: row; align-items: center; font-size: 24px;">
            <div style="padding-top: 100px; padding-right: 100px">
            <button id="deleteBasket"style="font-size: 40px" onClick={deleteBasket()}>Очистить корзину</button>
            </div>
            <div style="padding-top: 100px;">
            <button id="deleteBasket"style="font-size: 40px" onClick={goBasket()}>Продолжить оформление</button>
            </div>
        </div>
    </div>
    `;
}
    else{
        localStorage.removeItem('basket')
        elem[0].innerHTML = `<div style="margin: 100px 0 500px; font-size: 34px">Ваша корзина пуста</div>`;

    }
}


function plus() {
        event.preventDefault()
        allBasket.price += 399;
        headPrice[0].innerHTML = `${allBasket.price} РУБ.`
        localStorage.setItem('basket', JSON.stringify(allBasket))
        numberTov = allBasket.price / 399
        elem[0].innerHTML = `
    <div style="margin: 100px 0 500px; font-size: 34px;">
        <div style="vertical-align: middle; display: flex; flex-direction: row; align-items: center; font-size: 24px;">
            <div>1)</div>
            <img  src="https://user80515.clients-cdnnow.ru/2b-ru/1601564989213_392x320.jpeg" height="80px" alt="" style="padding: 0 0 0 30px">
            <div style="margin: 0 150px">Цена: ${allBasket.price}</div>
            <button id="minus" style="margin: 0 50px" onClick={minus()}>
            <img src="../img/54601.png" height="40px">
            </button>
            <div style="margin: 0 10px">${numberTov}</div>
            <button id="plus" style="margin: 0 50px" onClick={plus()}>
            <img src="../img/304947.svg" height="40px">
            </button>
        </div>
        <div style="padding-top: 100px">
            Итого: ${allBasket.price}
        </div>
        <div style="vertical-align: middle; display: flex; flex-direction: row; align-items: center; font-size: 24px;">
            <div style="padding-top: 100px; padding-right: 100px">
            <button id="deleteBasket"style="font-size: 40px" onClick={deleteBasket()}>Очистить корзину</button>
            </div>
            <div style="padding-top: 100px;">
            <button id="deleteBasket"style="font-size: 40px" onClick={goBasket()}>Продолжить оформление</button>
            </div>
        </div>
    </div>
    `;
    }

    function deleteBasket() {
        localStorage.removeItem('basket')
        elem[0].innerHTML = `<div style="margin: 100px 0 500px; font-size: 34px">Ваша корзина пуста</div>`;
    }

    function goBasket() {
        // localStorage.removeItem('basket')
        document.location.href = "order.html"
    }