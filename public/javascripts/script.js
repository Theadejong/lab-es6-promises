// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', steakImg)
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`

addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here

  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(mashPotatoesImg)
      })
    })
  })
});

// Iteration 3 using async/await

async function makeFood(step) {
  // ... your code here
  console.log(step)
  for (element in step) {
    await addFood(step[element], '#brusselSprouts')
  }

  await brusselSproutImg()
  // await Promise.all([brusselSproutImg()]).then(() => {
  //   alert("Dinner is served!")
  // })

}
makeFood(brusselSprouts);

// newImg.src = url('../images/mashPotatoes.jpg')
// newImg.src = url('../images/steak.jpg')
// newImg.src = url('../images/brusselSprouts.jpg')

function mashPotatoesImg() {
  let newImg = document.createElement('img')
  newImg.src = 'public/images/mashPotatoes.jpg'
  newImg.alt = 'mashed potatoes'
  let table = document.getElementById('table')
  table.appendChild(newImg)
}

function brusselSproutImg() {
  let newImg = document.createElement('img')
  newImg.src = 'public/images/brusselSprouts.jpg'
  newImg.alt = 'brussel sprouts'
  let table = document.getElementById('table')
  table.appendChild(newImg)
}

function steakImg() {
  let newImg = document.createElement('img')
  newImg.src = 'public/images/steak.jpg'
  newImg.alt = 'Steak'
  let table = document.getElementById('table')
  table.appendChild(newImg)
}


// Promise.all([brusselSproutImg]).then(
//   alert("Dinner is served!")
// )

// Promise.all([addFood])
//   .then(alert("Dinner is served!"))
//   .catch(error => {
//     console.error(error.message)
//   });
// Promise.all([addFood, steakImg, brusselSproutImg]).then(
//   function () {
//     alert('all promises complete!');
//   })

// Promise.all([makeFood]).then(() => {
//   alert("Dinner is served!")
// })