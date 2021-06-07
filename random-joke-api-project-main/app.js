const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const type = document.querySelector('#joke-type');
const punch = document.querySelector('#joke-punchline');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
})

function getRandomJoke(){
    const ajax = new XMLHttpRequest;
    // https://api.chucknorris.io/jokes/random
    const url = '  https://official-joke-api.appspot.com/random_joke'
  
    ajax.open('GET', url, true);
    // 
    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            jokeDIV.innerHTML = `${data.setup}`;
            type.innerHTML = `${data.type}`;
           
            punch.innerHTML = `${data.punchline}`;
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}

function onerror(){
     jokeDIV.textContent = 'There was an error!';  
}