//listen for 'keydown' event; runs function below, gives us event
window.addEventListener('keydown', function (e){
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)
    if(!audio)return; //stop the function from running all together
    audio.currentTime = 0; //rewinds keypress to the start
    audio.play()
});
