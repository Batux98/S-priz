function createSmallHeart() {
    const heart = document.createElement("div");
    heart.classList.add("small-heart");
    heart.innerText = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createSmallHeart, 500);