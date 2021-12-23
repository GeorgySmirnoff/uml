// const LIMIT = 4
// let from = LIMIT
// let url = 'https://jsonplaceholder.typicode.com/photos'
// let data = []

// setTimeout(()=>{
//   fetch(url)
//   .then(response => {
//   if (!response.ok) {
//     throw `${response.status}`
//   }
//   return response.json().then((result) => {
//     data = result
//     listRender(data.slice(0, LIMIT))
//   })
// })
//  .catch(response => {
//     document.querySelector(".main__center1").innerHTML="Что то пошло не так"
// })

// }, 3000)
// // fetch(url)
// //   .then(response => {
// //   if (!response.ok) {
// //     throw `${response.status}`
// //   }
// //   return response.json().then((result) => {
// //     data = result
// //     listRender(data.slice(0, LIMIT))
// //   })
// // })
// //  .catch(response => {
// //     document.querySelector(".main__center1").innerHTML="Что то пошло не так"
// // })

// function listRender(items) {
//   let itemsArr = items.map(function(item) {
//     return createList(item);
//   });

//   let content = ``;
//   itemsArr.forEach(function(itemInfo) {
//     content += itemInfo;
//   });

//   document.querySelector(".main__center1").innerHTML = content
// }

// function createList(item) {
//   return `
//   <div class="block__pizza one">
//   <div class="block__pizza__img">
//       <img src="${item.url}" width="100%" alt="">
//   </div>
//   <div class="block__pizza__title">
//       <h1>${item.id}</h1>
//   </div>
//   <div class="block__pizza__subtitle"><h2>${item.title}</h2>
//   </div>
//   <div class="block__pizza__button__price">
//       <div class="block__pizza__button">
//           <a href="#">Выбрать</a>
//       </div>
//       <div class="block__pizza__price">${item.albumId} рублей</div>
//   </div>
// </div>
// `
// }

// load.onclick = () => {
// 	const to = from + LIMIT
//   listRender(data.slice(from, to))
//   from = to
// }
let allPrice = 0;
const infoPrice = localStorage.getItem('basket')
if (infoPrice != null) {
  allPrice = JSON.parse(infoPrice).price;
}

elemClass = document.querySelectorAll('.block__pizza__button > a')

elemInput = document.querySelectorAll('.block__pizza__button > input')

const headPrice = document.getElementsByClassName("header__price");

headPrice[0].innerHTML = `${allPrice} РУБ.`

for(let i = 0; i < elemClass.length; i++){
  elemClass[i].onclick = function(){
    event.preventDefault();
    addPizza(elemInput[0].name, elemInput[0].src, elemInput[0].value)
  };
}

function addPizza(name, src, price){
  // alert(name + " " + price)
  allPrice += parseInt(price)
  const pizza = {
    name,
    src,
    price: allPrice
  }

  localStorage.setItem('basket', JSON.stringify(pizza))

  headPrice[0].innerHTML = `${allPrice} РУБ.`
}

my_create_order.onclick = function() {
  event.preventDefault();
  alert("Ожидайте заказ, он будет в течение часа");
  localStorage.removeItem('basket');
  document.location.href = "index.html"
}