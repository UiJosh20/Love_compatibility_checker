
  
  display.style.display = "none"
  displayCompat.style.display = "none"

const checkCompact = () => {
  let myName = yourName.value;
  let loveName = loverName.value;

  if (myName == "" && loveName == ""){
    showErr.innerHTML = `<p class="alert alertdanger text-center fw-bold">inputs must be filled</p>`
  }
  else{
    display.style.display = "block"
  displayCompat.style.display = "block"

    document.getElementById('yourName').value = ""
    loverName.value = ""
    showErr.innerHTML = ""
    display.innerHTML = ""
    let randomize = Math.random()*100;
    let overAll = Math.round(randomize)
    display.innerHTML = `<h5 class="extraLg text-black text-center text-white">${overAll}%</h5>`

    if (overAll < 50){
      displayCompat.innerHTML = `<h5 class="text-center text-warning bg-black p-2"> Oops, You are not compatible</h5>`
    }else if (overAll >= 50){
      displayCompat.innerHTML = `<h5 class=" text-center fw-bold congrats">Congratulations you are compatible</h5>`
    }
  }
setTimeout(()=>{
  showErr.style.display = "none"
},2500)
}



