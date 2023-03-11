//смотрим есть ли ссылка на localStorage
let URL = localStorage.getItem('URL');
if(URL){
  outImg(URL);
}

let output = document.getElementById("output");
const btn = document.getElementById("btn");

//функция вывода картинок
function outImg(url){
  fetch(url)
        .then((response) =>{
        const res = response.json();
        return res;
      })
        .then((data) =>{       
        let cards = "";
        data.forEach(item =>{
        const card = `
          <div class = "card">
            <img src = "${item.download_url}">
            <p>${item.author}</p>
          </div>
        `
        cards = cards + card;
        });
        output.innerHTML = cards;          
      })
}

// при нажатии на кнопку
btn.addEventListener("click", () =>
{
  let pageInp = document.getElementById("firstInp");
  let limitInp = document.getElementById("secondInp");
  let message = "";  
  
  if(pageInp.value >= 1 && pageInp.value <= 10){
    if(limitInp.value >= 1 && limitInp.value <= 10){
      // OK
      const url = `https://picsum.photos/v2/list?page=${pageInp.value}&limit=${limitInp.value}`;
      
      //загрузка в localStorage
      localStorage.setItem('URL', url);
      //вызов функции
      outImg(url);
    }
    else{
      message = "Лимит вне диапазона от 1 до 10";      
    }
  }
  else if(limitInp.value >= 1 && limitInp.value <= 10){
    if(pageInp.value >= 1 && pageInp.value <= 10){
      message = "OK";
    }
    else{
      message = "Номер страницы вне диапазона от 1 до 10";
    }
  }
  else{
    message = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
  output.innerHTML = message;
})