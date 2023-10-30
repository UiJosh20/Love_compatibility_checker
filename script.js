




const checkCompact = () => {
  let myName = yourName.value;
  let loveName = loverName.value;

  if (myName == "" && loveName == ""){
    showErr.innerHTML = `<p class="alert alertdanger text-center fw-bold">inputs must be filled</p>`
  }
  else{
    document.getElementById('yourName').value = ""
    loverName.value = ""
    showErr.innerHTML = ""
    display.innerHTML = ""
    let randomize = Math.random()*100;
    let overAll = Math.round(randomize)
    display.innerHTML = `<p class="text-light text-center"> Love score for ${myName} and ${loveName} : ${overAll}%</p>`

    if (overAll < 50){
      displayCompat.innerHTML = `<p class="text-center text-warning"> O0ps, You are not compatible</p>`
    }else if (overAll >= 50){
      displayCompat.innerHTML = `<p class="text-success text-center fw-bold">Congratulations you are compatible</p>`
    }
  }
setTimeout(()=>{
  showErr.style.display = "none"
},2500)
}



