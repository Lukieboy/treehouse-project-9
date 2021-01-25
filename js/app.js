const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const overlayText = document.querySelector('.overlay-text');
const cardImage = document.querySelector('.card-img-top');
const aboutImage = document.querySelector('.about-image');
const toggleProjects = document.querySelector('.toggle-projects');
const projectContainer = document.querySelector('.project-container');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const header = document.querySelector('.header');
const cardBody = document.querySelector('.card-body');
const allCardContainer = document.querySelectorAll('.card-container');
const allCard = document.querySelectorAll('.card');
const change = document.querySelectorAll('.change');
const bgGray = document.querySelectorAll('.background-gray');
const switchInput = document.querySelector('#switch');
const label = document.querySelector('.label');
const save = document.querySelector('.save');
const modeSet = localStorage.getItem("mode");
var mode = "light";
const backgroundUrl = 'images/coding-bg.jpg';
const svgFill = document.querySelector('.fill');


body.addEventListener('click', (e)=>{
    // console.log(e.target.className)
    if(e.target.className === "btn btn-primary view-site-button"){
        let modalTitle = document.querySelector('.modal-title');
        let modalBody = document.querySelector('.modal-body');
        let modalButton = document.querySelector('.modal-button');
        let modalSkills = document.querySelector('.modal-skills');
        if(e.target.id ==="1"){
            modalButton.href="projects/8-project/index.html";
            modalSkills.innerHTML ="<h4>Skills Required:</h4><p>Javascript, HTML5, CSS</p><hr><h4>Grade Recived</h4><p>Meets Expectations</p>";
        }else if(e.target.id ==="2"){
            modalButton.href="projects/7-project";
            modalSkills.innerHTML ="<h4>Skills Required:</h4><p>SVG graphics, HTML5, CSS, Javascript</p><hr><h4>Grade Recived</h4><p>Meets Expectations</p>";
        }else if(e.target.id ==="3"){
            modalButton.href="projects/6-project";
            modalSkills.innerHTML ="<h4>Skills Required:</h4><p>HTML5, Javascript</p><hr><h4>Grade Recived</h4><p>Meets Expectations</p>";
        }else if(e.target.id ==="4"){
            modalButton.href="projects/5-project";
            modalSkills.innerHTML ="<h4>Skills Required:</h4><p>Javascript, HTML5, CSS</p><hr><h4>Grade Recived</h4><p>Meets Expectations</p>";
        }else if(e.target.id ==="5"){
            modalButton.href="projects/4-project";
            modalSkills.innerHTML ="<h4>Skills Required:</h4><p>SASS</p><hr><h4>Grade Recived</h4><p>Exceeds Expectations</p>";
        }else{
            modalButton.href="projects/3-project";
            modalSkills.innerHTML ="<h4>Skills Required:</h4><p>HTML5, CSS</p><hr><h4>Grade Recived</h4><p>Exceeds Expectations</p>";
        }
    }
});


const allOverlayText = document.querySelectorAll('.overlay-text');

setInterval(()=>{
    allOverlayText.forEach(element => {
        element.style.height = `${document.querySelector('.card-img-top').height}px`;
    });
}, 100);





body.addEventListener('click', (e)=>{
    if(e.target.className === "btn btn-primary view-site-button"){
        let modalTitle = document.querySelector('.modal-title');
        let modalBody = document.querySelector('.modal-body');
        let modalButton = document.querySelector('.modal-button');
        let modalSkills = document.querySelector('.modal-skills');
        for (let index = 1; index < 7; index++) {     
            if(e.target.id == index){
                modalTitle.textContent = document.querySelector(`.title${index}`).textContent;
                modalBody.textContent = document.querySelector(`.paragraph-${index}`).textContent;
            }
        }
    }
});


toggleProjects.addEventListener('click', ()=>{
    if(toggleProjects.textContent === "Hide Projects"){
        projectContainer.style.display = "none";
        toggleProjects.textContent = "Show Projects";
    }else{
        projectContainer.style.display = "flex";
        toggleProjects.textContent = "Hide Projects";
    }
});


function checker(){
    if(switchInput.checked){
        darkMode();
    }else{
        lightMode();
    }
}

label.addEventListener('click', ()=> checker());

function lightMode(){
    svgFill.style.stroke = "black";
    mode = "light";
    body.style.backgroundColor = "white";
    header.style.background = `linear-gradient(rgb(46, 46, 122), transparent 90%),
    linear-gradient(0deg, white, transparent ),
  orange url(${backgroundUrl}) no-repeat center`;
  for(let i = 0; i < allCardContainer.length; i++){
        allCardContainer[i].classList.remove("bg-dark");
        allCard[i].classList.remove("bg-dark");
        allCard[i].classList.remove("text-white");
    }
    for(let i = 0; i < change.length; i++){
    change[i].style.color = "black";
    change[i].style.backgroundColor = "white";
    }

    bgGray.forEach(element => element.style.backgroundColor = "rgb(243, 243, 243)");

}


function darkMode(){
    svgFill.style.stroke = "white";
    mode="dark";
    body.style.backgroundColor = "black";
    header.style.background = `linear-gradient(rgb(46, 46, 122), transparent 90%),
    linear-gradient(0deg, black, transparent ),
  orange url(${backgroundUrl}) no-repeat center`;
  for(let i = 0; i < allCardContainer.length; i++){
    allCardContainer[i].className += " bg-dark";
    allCard[i].className += " bg-dark text-white";
    }

    for(let i = 0; i < change.length; i++){
    change[i].style.color = "white";
    change[i].style.backgroundColor = "black";
    }
}

save.addEventListener('click', ()=>{
    if(localStorage.getItem("mode") != "dark" && localStorage.getItem("mode") != "light"){
        localStorage.setItem("mode", `${mode}`);
    }else{
        localStorage.mode = `${mode}`;
    }
})

function setSettings(){
    if(modeSet == "dark"){
        darkMode();
        switchInput.checked = true;
    }else if(modeSet == "light"){
        lightMode();
        switchInput.checked = false;
    }else{
        lightMode();
        switchInput.checked = false;
    }
}


setSettings();
