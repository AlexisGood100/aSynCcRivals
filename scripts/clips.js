const clips = [new Clip('Scarlet Witch Pentakill', '/clips/clip1.mp4')];

const insertClips = (clipArray, parent) => {

clipArray.forEach((clip)=>{

    let clipDiv = document.createElement('div');
    clipDiv.classList.add('clip-div');
    clipDiv.classList.add('hide');
    let clipName = document.createElement('h3');
    clipName.innerText = clip.name;
    let video = document.createElement('video');
    video.classList.add('clip');
    video.src = clip.src;
    let playButton = document.createElement('button');
    playButton.innerText = 'Play';
    let pauseButton = document.createElement('button');
    pauseButton.innerText = 'Pause';
    let reloadButton = document.createElement('button');
    reloadButton.innerText = 'Reload';
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');
    clipDiv.appendChild(clipName);
    clipDiv.appendChild(video);
    buttonDiv.appendChild(playButton);
    buttonDiv.appendChild(pauseButton);
    buttonDiv.appendChild(reloadButton);
    clipDiv.appendChild(buttonDiv);

    parent.appendChild(clipDiv);
    
    playButton.addEventListener('click', () => {
        video.play();
      });
    
      // Pause the video
      pauseButton.addEventListener('click', () => {
        video.pause();
      });
    
      // Reload the video
      reloadButton.addEventListener('click', () => {
        video.currentTime = 0;
        video.pause();
      });

});

};

insertClips(clips, document.querySelector('.clips-container'));