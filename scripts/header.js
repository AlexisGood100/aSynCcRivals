allHeaderLinks[0].addEventListener('click', ()=>{
    setAppear(0, sectionNodeList);
    addActive(0, allHeaderLinks);
    removeClipDiv();
});


allHeaderLinks[1].addEventListener('click', ()=>{
    setAppear(1, sectionNodeList);
    addActive(1, allHeaderLinks);

    allProjectLinks.forEach((link)=>{
        link.classList.remove('active');
    })
    
    allProjectContentContainers.forEach((container)=>{
        container.classList.add('hide');
    })
removeClipDiv();
})


allHeaderLinks[2].addEventListener('click', ()=>{
    setAppear(2, sectionNodeList);
    document.querySelector('.clip-div').classList.remove('hide');
    addActive(2, allHeaderLinks);
})



