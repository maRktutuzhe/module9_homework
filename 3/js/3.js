

let btn = document.getElementById("btn");
let output = document.querySelector(".output");

function useRequest(url, callback){
  const xhr = new XMLHttpRequest();
  
  xhr.open("GET", url);
  xhr.onload = function (){
    if(xhr.status != 200){
      console.log(`Статус ответа: ${xhr.status}`)
    }
    else{
      const jsonString = JSON.parse(xhr.response);
      if(callback){
        callback(jsonString);
      }
    }
  };
  xhr.onerror =  function(){
    console.log(`Ошибка! Статус ответа: ${xhr.status}`)
  };
  xhr.send();
};

function displayResult(jsonString){
  let cards = "";
  jsonString.forEach(item =>{
    const card = `
    <div class = "card">
      <img src = "${item.download_url}">
      <p>${item.author}</p>
    </div>
    `
    cards = cards + card;
  });
  output.innerHTML = cards;
};

btn.addEventListener("click", () => 
{
  let inp = document.getElementById("inp");
  let res = inp.value;
  if(res > 0 && res < 11){
    const url = `https://picsum.photos/v2/list?limit=${res}`;
    useRequest(url, displayResult);    
}
  else{
    console.log(` ${res} находится вне диапазона от 0 до 10((` );
  }     
});




