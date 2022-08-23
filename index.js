document.addEventListener("DOMContentLoaded", () => {

fetch('https://thronesapi.com/api/v2/Characters')
    .then((resp) => resp.json())
    .then(arr => {
        arr.forEach(characters => renderCharacterList(characters, arr))
    })


    
function renderCharacterList(characters, arrFilter) {
    console.log(characters)
    const ul = document.querySelector('#character-list')
    const li = document.createElement('li')

    li.textContent = characters.fullName

    ul.append(li)

    li.addEventListener('click', () => renderDetails(characters))

    
    li.addEventListener('mouseover', (e) => {
        e.target.style.color = 'red'
        console.log('before filter:  ', arrFilter);

        const ul = document.querySelector('#character-list')

    //    ul.innerHTML = ` `
        const filteredInfo = arrFilter.filter(character => {
            //console.log(character)
            //ul.innerHTML = ` `
            //arr.forEach(characters => renderCharacterList(characters))
            return character.title.family
            
        }) 
        
        
       console.log('after:  ', filteredInfo)
        
    })

}


function renderDetails(characters) {
    const divDetails = document.querySelector('.character-details')
    const name = document.querySelector('#character-name')
    const title = document.querySelector('h3')
    const family = document.querySelector('h4')
    const imgChar = document.querySelector("#character-image")
    const emTag = document.querySelector('#character-description')

    name.textContent = characters.fullName
    title.textContent = characters.title
    family.textContent = characters.family
    imgChar.src = characters.imageUrl
    console.log(imgChar)
    // emTag.textContent = characters.family

    // divDetails.append(name, imgChar)
    // p.append(title, family)

    //append
    //and text
    
}

const form = document.querySelector('#comments-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const textAreaId = document.querySelector('#comments')
    const newLi = document.createElement('li')
    const divForm = document.querySelector('#posted-comments')

    newLi.textContent = e.target.comments.value

    divForm.append(newLi)
})
})