const num1 = Math.ceil(Math.random()*10)

const num2 = Math.ceil(Math.random()*10)

let h1 = document.querySelector('#question')

h1.innerHTML = `What is ${num1} multiplied  by ${num2}?`

const respostas = document.getElementById('input')

const certo = num1 * num2

const formEl = document.getElementById('form')

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0
}

document.querySelector('#score').innerHTML = `score: ${score}`

formEl.addEventListener("submit",()=>{
    const ans = Number(respostas.value)
    
    if (ans === certo){
        
        score++
        
       
        updatelocalStorage()
    }else{
        
        score--
        if (score < 0){
            score = 0
        }
        updatelocalStorage()
    }
    
})



function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
