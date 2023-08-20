// 1st Question
const delay = (time) => {
    // Write the logic here
}
   
let count = counter()

count.start()
setTimeout(() => {
    count.stop()
},6000)



// 2nd Question
function randomAsyncFunction() {
    const time = Math.floor(Math.random * 100)
    const x = setTimeout(() => {
      console.log('finished!!')
    },time)
}

async function asyncWithCallback(callback) {
    // Write logic here
}
   
asyncWithCallback(() => {
    console.log("fsdfsa")
})
  


// 3rd Question
function randomAsyncFunction() {
    // logic here
  }
   
   
  async function asyncWithCallback(callback) {
    // Logic here
  }
   
  asyncWithCallback(() => {
    console.log("fsdfsa")
  })
  