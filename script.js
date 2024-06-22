let ldin = document.getElementById("ldin");
let git = document.getElementById("github");

function changeImage(source, name) {
    name.src = `${source}`;
    console.log("img changed");
}

function RechangeImage(source, name) {
    name.src = `${source}`;
    console.log("img re-changed");
}

git.addEventListener('mouseover', () => changeImage("./icons/github-purple.png", git));
git.addEventListener('mouseout', () => RechangeImage("./icons/github.svg", git));

ldin.addEventListener('mouseover', () => changeImage("./icons/linkedin-blue.png", ldin));
ldin.addEventListener('mouseout', () => RechangeImage("./icons/linkedin.svg", ldin));
