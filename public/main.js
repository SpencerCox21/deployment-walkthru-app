let myBtn = document.querySelector('button')
let myDiv = document.querySelector('div')


myBtn.addEventListener('click', () => {
    axios.get('/cat')
    .then((res) => {
        let catName = res.data

        myDiv.innerHTML = ''

        let newP = document.createElement('p')
        newP.innerHTML = catName
        myDiv.appendChild(newP)
        
    })
    .catch((err) => {
        console.log(err)
    })
})