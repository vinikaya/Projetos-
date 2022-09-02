document.body.addEventListener('keyup',(event)=>{
    playsound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value;
    
    if(song !== ''){
        let songarray = song.split('');
        playcomposition(songarray);
    }
});


function playsound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(audioElement){
        keyElement.classList.add('active');

        setInterval(()=>{
            keyElement.classList.remove('active');
        },400);
    }
}
function playcomposition(songarray) {
    let wait = 0;

    for(let songitem of songarray){
        setTimeout(()=>{
            playsound(`key${songitem}`);
        },wait)
        wait += 250;
    }
}