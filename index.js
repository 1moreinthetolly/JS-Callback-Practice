const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
character.style.zIndex = +1

function handleDirectionChange(direction){
if(direction === null){
  character.src = 'assets/green-character/static.gif'
  }
if(direction === 'west'){
  character.src = 'assets/green-character/west.gif' 
  }
if(direction === 'east'){
  character.src = 'assets/green-character/east.gif'
  }
if(direction === 'north'){
  character.src = 'assets/green-character/north.gif'
  }
if(direction === 'south'){
  character.src = 'assets/green-character/south.gif'
  }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)


function backgroundImage(asset, left, bottom){
  let image = document.createElement('img')
  image.src = asset
  image.style.position = 'fixed'
  image.style.left = left
  image.style.bottom = bottom
  image.style.zIndex = - 1
  document.body.append(image)
}

function createBackground(){
    let grassHeight = window.innerHeight *.69;
    let skyHeight = window.innerHeight *.31;

    for(let i=0; i<window.innerWidth; i+=100){
      for(let j=0; j<grassHeight; j+=100){
       backgroundImage('assets/grass.png', i+ 'px', j + 'px');
      }
  }
  for(let i=0; i<window.innerWidth; i+=100){
    for(let j=0; j<skyHeight; j+=100){
      let k = grassHeight + j;
      backgroundImage('assets/sky.png', i + 'px', k + 'px');
    }
   }
  }

createBackground();


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)