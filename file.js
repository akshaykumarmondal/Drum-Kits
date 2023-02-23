// commenting the buttons from html and creating them using js.

const kits=['Crash','Kick','Snare','Tom'];

const containerEl=document.querySelector('.container');

// console.log(containerEl);

kits.forEach((kit)=>{

    const btnEl=document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerText=kit;

    btnEl.style.backgroundImage= `url("images/${kit}.png")`;

    containerEl.appendChild(btnEl);

    //creating audio element

    const audioEl=document.createElement('audio');
    
    //adding src attribute in audio element
    audioEl.src=`Sound/${kit}.mp3`;

    containerEl.appendChild(audioEl);

    //adding eventlistener to respective buttons

    btnEl.addEventListener('click',()=>{

        audioEl.play();
    })

    //Playing with keys while pressed

    window.addEventListener('keydown',(event)=>{

        // console.log(event.key);

        if(event.key === kit.slice(0,1)){

            audioEl.play();
            btnEl.style.transform="scale(.9)";

            //after pressing the key the size decreases but we want to reset it ti 100% for that using settimeout

            setTimeout(()=>{

                btnEl.style.transform="scale(1)";

            },100);
        }
        

    })
    
})