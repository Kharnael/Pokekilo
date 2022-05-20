let modeSwitch = document.getElementById('dayNightToggle')
let bodySwitch = document.querySelector('body')


modeSwitch.addEventListener('click', () =>{
    bodySwitch.classList.toggle('dayMode')
    
    

    if (bodySwitch.classList.contains('dayMode') == true) {
        console.log('true')
        modeSwitch.src="public/assets/img/seleroc.png"
    } else {
        console.log('false')
        modeSwitch.src="public/assets/img/solaroc.png"
    }

})