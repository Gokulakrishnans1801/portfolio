// for toggle icon in navbar
let menuIcon = document.getElementById("boxmenu");
let navbar = document.querySelector(".navbar");
menuIcon.addEventListener('click',()=>{
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
})


//  For scrolling
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((section) => {
//     let top = window.scrollY;
//     // offsetTop= top of the parent element - [itself=> elememt (div or section)]
//     let offset = section.offsetTop - 100;
//     // offsetTop= returns the whole height of root(parent) element
//     let height = section.offsetHeight;
//     let id = section.getAttribute("id");
//     if (top >= offset && top < offset + height) {
//       // active navbar links
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
//       });
//     }
//   });
//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);

//   // remove toggle icon and navbar when click navbar links(scroll)
// };


document.addEventListener('scroll', () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    // offsetTop= top of the parent element - [itself=> elememt (div or section)]
    let offset = section.offsetTop - 100;
    // offsetHeight= returns the whole height of root(parent) element
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}
);