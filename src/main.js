
document.addEventListener("scroll", function () {
  const header = document.querySelector(".header-container"); // Match your HTML
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.ExpButtonList button');
  const stories = document.querySelectorAll('.ExperienceContent li');

  buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
      stories.forEach(story => story.style.opacity = 0); // hide all
      stories[index].style.opacity = 1; // show one
    });

    button.addEventListener('mouseleave', () => {
      stories[index].style.opacity = 0; // optional: hide on mouse out
    });
  });
});

