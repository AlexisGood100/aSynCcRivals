

const setAppear = (num, nodeList) =>{
   nodeList.forEach((section)=>{
    section.classList.add('hide')
   });
   nodeList[num].classList.remove('hide');
}

const addActive = (num, nodeListOfHeaderLinks) =>{

nodeListOfHeaderLinks.forEach((link)=>{
link.classList.remove('active');
});

console.log(nodeListOfHeaderLinks[num])

nodeListOfHeaderLinks[num].classList.add('active');
};

const removeClipDiv = () =>{
   document.querySelector('.clip-div').classList.add('hide');
}