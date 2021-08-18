const button = document.querySelector('button')
const body = document.querySelector('body')

const baseURL = "https://swapi.dev/api"
function clickButton(e){
    e.preventDefault()
    
    // console.log('button click')
    axios.get(`${baseURL}/planets/2`).then(res =>{
        console.log(res.data)
        for(let i = 0; i < res.data.residents.length; i++){
             axios.get(res.data.residents[i]).then (res =>{
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                // console.log(res.data.name)
             })
        }
    })
}
button.addEventListener('click', clickButton)