function createToaster(config) {
    let parent = document.querySelector(".parent");
    parent.style.position = "fixed";
    parent.style[config.positionX] = "20px";
    parent.style[config.positionY] = "20px";
    parent.style.display = "flex";
    parent.style.flexDirection = "column";
    parent.style.gap = "0.5rem";
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;

        div.style.backgroundColor = config.theme === "dark" ? "#1f2937" : "#f3f4f6";
        div.style.color = config.theme === "dark" ? "white" : "black";
        div.style.padding = "1.5rem";
        div.style.borderRadius = "0.375rem";
        div.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        div.style.pointerEvents = "none";

           parent.appendChild(div);

          setTimeout(() => {
            parent.removeChild(div);
            }, config.duration * 1000);

    };
}

let toaster = createToaster({ 
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});
toaster("Download Done");
setTimeout(() => {
    toaster("Tanisha accepted your request");
}, 2000);

setTimeout(() => {
    toaster("Diya send you a message");
}, 1500);