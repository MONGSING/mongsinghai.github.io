window.addEventListener("scroll", function(){
    let header = document.querySelector(".navbar1");
    header.classList.toggle("sticky", window.scrollY > 0);
})