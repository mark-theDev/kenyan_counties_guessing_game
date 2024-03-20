// Click search to return county and number in the array

const countiesKenya = [
    { name: 'Mombasa', number: 1 },
    { name: 'Kwale', number: 2 },
    { name: 'Kilifi', number: 3 },
    { name: 'Tana River', number: 4 },
    { name: 'Lamu', number: 5 },
    { name: 'Taita-Taveta', number: 6 },
    { name: 'Garissa', number: 7 },
    { name: 'Wajir', number: 8 },
    { name: 'Mandera', number: 9 },
    { name: 'Marsabit', number: 10 },
    { name: 'Isiolo', number: 11 },
    { name: 'Meru', number: 12 },
    { name: 'Tharaka-Nithi', number: 13 },
    { name: 'Embu', number: 14 },
    { name: 'Kitui', number: 15 },
    { name: 'Machakos', number: 16 },
    { name: 'Makueni', number: 17 },
    { name: 'Nyandarua', number: 18 },
    { name: 'Nyeri', number: 19 },
    { name: 'Kirinyaga', number: 20 },
    { name: 'Muranga', number: 21 },
    { name: 'Kiambu', number: 22 },
    { name: 'Turkana', number: 23 },
    { name: 'West Pokot', number: 24 },
    { name: 'Samburu', number: 25 },
    { name: 'Trans-Nzoia', number: 26 },
    { name: 'Uasin Gishu', number: 27 },
    { name: 'Elgeyo-Marakwet', number: 28 },
    { name: 'Nandi', number: 29 },
    { name: 'Baringo', number: 30 },
    { name: 'Laikipia', number: 31 },
    { name: 'Nakuru', number: 32 },
    { name: 'Narok', number: 33 },
    { name: 'Kajiado', number: 34 },
    { name: 'Kericho', number: 35 },
    { name: 'Bomet', number: 36 },
    { name: 'Kakamega', number: 37 },
    { name: 'Vihiga', number: 38 },
    { name: 'Bungoma', number: 39 },
    { name: 'Busia', number: 40 },
    { name: 'Siaya', number: 41 },
    { name: 'Kisumu', number: 42 },
    { name: 'Homa Bay', number: 43 },
    { name: 'Migori', number: 44 },
    { name: 'Kisii', number: 45 },
    { name: 'Nyamira', number: 46 },
    { name: 'Nairobi', number: 47 }
];

const searchBtn = document.querySelector('#button')
const countyDisplay = document.querySelector('.county-name')
const countyNumber = document.querySelector('#county-number')
const myInput = document.querySelector('#input-name')
const submitBtn = document.querySelector('#submit')

//event listener for the search button 

let countyMatch;
let result;
let index

searchBtn.addEventListener('click',()=>{
    //var to store a number to querry the array
    index = Math.floor((Math.random()*countiesKenya.length))
    countyNumber.textContent = index+1;
    countyMatch = countiesKenya[index].name.toLowerCase()
    countyDisplay.innerText = ''
    myInput.value = ''
    countyDisplay.classList.remove('show')
    console.log(index,countyMatch)
    myInput.focus();
})



submitBtn.addEventListener('click',()=>{
    let inputText = myInput.value

    countyDisplay.classList.add('show')
    
    if (inputText !== ''){
         if(inputText.toLowerCase() === countyMatch){
            countyDisplay.innerHTML = `<h4>Correct!!!</h4>`          
        }
        else{
            countyDisplay.innerHTML = `<h4>False!!!</h4>`
            countyDisplay.innerText = `Incorrect!!!\n${countiesKenya[index].name} County`        
        }
    }
    else{
        countyDisplay.innerText = 'Please Enter a County Name!'
    }   
})
  





