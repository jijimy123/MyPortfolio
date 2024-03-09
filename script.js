// Variables
var layerCount = 3;
var starCount = 400;
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;

for (var i = 0; i < starCount; i++) {
    var ypos = Math.round(Math.random() * height);
    var star = document.createElement("div");
    var speed = 1000 * (Math.random() * maxTime + 1);
    star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
    star.style.backgroundColor = "white";

    universe.appendChild(star);
    star.animate(
        [
            {
                transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
            },
            {
                transform: "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
            }
        ],
        {
            delay: Math.random() * -speed, // speed can be both: positive (more star) or negative (less star).
            duration: speed,
            iterations: Infinity
        }
    );
}

var elem = document.querySelector(".pulse");
if (elem) {
    var animation = elem.animate(
        {
            opacity: [0.5, 1],
            transform: ["scale(0.5)", "scale(1)"]
        },
        {
            direction: "alternate",
            duration: 500,
            iterations: Infinity
        }
    );
}

// // Get references to the home and projects divs
// const homeDiv = document.getElementById("home");
// const aboutDiv = document.getElementById("about");
// const projectsDiv = document.getElementById("projects");
// const contactDiv = document.getElementById("contact");

// function PageHome() {
//     homeDiv.style.display = "block";
//     aboutDiv.style.display = "none";
//     projectsDiv.style.display = "none";
//     contactDiv.style.display = "none";
// }

// function PageAbout() {
//     homeDiv.style.display = "none";
//     aboutDiv.style.display = "block";
//     projectsDiv.style.display = "none";
//     contactDiv.style.display = "none";
// }

// function PageProjects() {
//     homeDiv.style.display = "none";
//     aboutDiv.style.display = "none";
//     projectsDiv.style.display = "block";
//     contactDiv.style.display = "none";
// }

// function PageContact() {
//     homeDiv.style.display = "none";
//     aboutDiv.style.display = "none";
//     projectsDiv.style.display = "none";
//     contactDiv.style.display = "block";
// }