// // Ambil base path dari URL saat ini
// const basePath = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);

// // Gabungkan dengan nama file
// const navbarPath = basePath + "navbar.html";
// console.log(navbarPath);
// fetch(navbarPath).then(res => res.text()).then(data => {
//         document.getElementById('display_navbar').innerHTML = data;

//         // Setelah navbar dimuat, tambahkan class active
//         const currentPath = window.location.pathname.split("/").pop(); // Ambil nama file
       
// });

const currentPath = window.location.pathname.split("/").pop(); // Ambil nama file
document.querySelectorAll('#display_navbar a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

const toggle = document.getElementById("menu-toggle");
const slide = document.getElementById("navbar-slide");


function hamburger(element) {
    const toggle = document.getElementById(element.id);
    const slide = document.getElementById("navbar-slide");

    slide.classList.toggle("active");
}