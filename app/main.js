let animals = [{
  id: 'sheep998',
  name: 'Sheep',
  img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/25/96078.jpg',
  noise: 'grr angry sheep'
}, {
  id: 'not-a-sheep1946',
  name: 'Goat',
  img: 'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1.jpg',
  noise: '$&(@) (@(@'
},{
  id: '28732498',
  name: 'Aligator',
  img: 'https://i.ytimg.com/vi/X5Im4mMFK4A/maxresdefault.jpg',
  noise: 'Chomp Chomp'
}]

// Elems
const ANIMALS_ELEM = document.getElementById('animals')
const SELECTED_ANIMAL_ELEM = document.getElementById('selectedAnimal')


function drawAnimals(){
  ANIMALS_ELEM.innerHTML = ''
  animals.forEach(drawAnimal)
  // animals.forEach(animal => drawAnimal(animal))
}

/**
 * @param {{ id: string, name: string, noise: string, img: string }} animal
 */
 function drawAnimal(animal){
  let animalTemplate = /*html*/`
  <div class="col-lg-4">
    <div class="card shadow animal-card" id="${animal.id}" onclick="sayNoise('${animal.id}')" oncontextmenu="preventContext()">
      <img src="${animal.img}" alt="sheep" class="img-fluid">
      <div class="card-body">
        <h3 class="text-center">${animal.name}</h3>
      </div>
    </div>
  </div>
`
ANIMALS_ELEM.innerHTML += animalTemplate

}


function sayNoise(animalId){

  const animal = getAnimalById(animalId)

  SELECTED_ANIMAL_ELEM.textContent = `The ${animal.name} says ${animal.noise}`
}

function preventContext(){
    console.log('dont try to steal my stuff yo')
    event.preventDefault()
}


function getAnimalById(id){
  let found = animals.find(animal => animal.id === id)

  if(!found){ throw new Error('Invalid animal id') }

  return found

}

// DO THIS ON PAGE LOAD

drawAnimals()