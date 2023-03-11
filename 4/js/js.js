let output = document.getElementById("output");
const btn = document.getElementById("sub");
btn.addEventListener("click", () =>
{
  const first = document.getElementById("firstInp").value;
const second = document.getElementById("secondInp").value;
    
  
  if(first >= 100 && first <= 300 && second >= 100 && second <= 300){
    const url = `https://picsum.photos/${first}/${second}`;
    console.log("ok");
    fetch(url)
      .then((response) => {
        console.log('запрос: ', response);
        const result = response;
        console.log("результат: ", result);
        return result;
    })
      .then((data) =>{
        console.log("вывод ", data);
        const card = `
        <div id = "card">
          <img src = "${url}">
        </div>
        `
        output.innerHTML = card;
    })
      .catch(() => { console.log('error') });
  }
  else{
    const card = `
        <p> одно из чисел вне диапазона от 100 до 300</p>
        `;
     output.innerHTML = card;
  }
});