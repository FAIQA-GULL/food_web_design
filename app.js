const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const part1 = document.querySelector(".part1");
const part2 = document.querySelector(".part2");
const s2_text = document.querySelector(".s2_text");

// const section = document.querySelector("section");
const image_container = document.querySelector(".s2_img");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = part1.offsetHeight;
let section_height = part2.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = part2.getBoundingClientRect();

    translate.forEach(element =>{
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    part2.style.height = `${scroll * 0.5 + 300}px`;

    s2_text.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;



});