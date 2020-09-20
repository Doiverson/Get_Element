const main = document.querySelector('.main');

// A
document.querySelector('.btn').addEventListener("click", () => {
    main.classList.toggle("mystyle");
})

// B
document.querySelector('.btn').addEventListener("click", () => {
    if (main.style.display === "none") {
        main.style.display = "block";
    } else {
        main.style.display = "none";
    }})
