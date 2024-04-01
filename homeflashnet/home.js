next = document.querySelector("#next");
prev = document.querySelector("#prev");
imageslider = document.querySelector(".imageshome");
images = document.querySelectorAll(".images")
let slidernumber = 1;
// console.log(images);
next.onclick = function () {
    if (slidernumber < images.length) {
        console.log("Next");
        imageslider.style.transform = `translateX(-${slidernumber * 100}vw)`;
        slidernumber++;

    }
    else {

        console.log("Next");
        imageslider.style.transform = `translateX(0vw)`;
        slidernumber = 1;

    }
}

prev.onclick = function () {
    if (slidernumber > 1) {
        console.log("Previous");
        slidernumber--;
        imageslider.style.transform = `translateX(-${(slidernumber - 1) * 100}vw)`;
    }
    else {
        console.log("Previous");
        slidernumber = images.length;
        imageslider.style.transform = `translateX(-${(slidernumber - 1) * 100}vw)`;
    }
}


