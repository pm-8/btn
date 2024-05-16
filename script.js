const btn = document.querySelector(".btn");
let clickCount = 0;

btn.addEventListener("click", () => {
    clickCount++;
    setTimeout(() => {
        if (clickCount === 1) {
            alert("You just Clicked");
        }
        clickCount = 0;
    }, 300);
});

btn.addEventListener("dblclick", () => {
    alert("You just double clicked");
});

btn.addEventListener("mouseover",()=>{
    alert("Mouse is over the button!");
});
btn.addEventListener("mouseout",()=>{
    alert("Mouse is out of the button")
})