
//Custom guild sites
allProjectLinks[0].addEventListener('click', ()=>{
    setAppear(0, allProjectContentContainers);
    addActive(0, allProjectLinks);
})

//end of custom guild sites

// Streamer Websites
allProjectLinks[1].addEventListener('click', ()=>{
    setAppear(1, allProjectContentContainers);

       addActive(1, allProjectLinks);
})

// End of streamer websites

// Gamer logos
allProjectLinks[2].addEventListener('click', ()=>{
        setAppear(2, allProjectContentContainers);
       addActive(2, allProjectLinks);
})
// setting up the gamer logos

const gamerLogoSrcs = [
    new Project('GokuAsync', './images/logos/logo1.jpg'),
    new Project('VenomAsync', './images/logos/logo2.jpg'),
    new Project('GokuAsync2', './images/logos/logo3.jpg'),
    new Project('VenomAsync2','./images/logos/logo4.jpg')
];

// inserting the images into the frontend when the gamer logos tab is clicked
const gamerLogoInsertionContainer = document.querySelector('.custom-gamer-logo-insertion');

allProjectLinks[2].addEventListener('click', ()=>{
    const gamerLogoInsertionContainerImages = document.querySelectorAll('.custom-gamer-logo-insertion img');
    if(gamerLogoInsertionContainerImages.length > 0){
        gamerLogoInsertionContainerImages.forEach(image => image.remove());
    }
    gamerLogoSrcs.forEach((img)=>{
        const imgElement = document.createElement('img');
        imgElement.classList.add('gamer-logo');
        imgElement.src = img.src;
        imgElement.alt = img.name;
        gamerLogoInsertionContainer.appendChild(imgElement);
    })
})
