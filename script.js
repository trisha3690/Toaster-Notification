 function createToaster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.style.position = "fixed";
        div.style[config.positionX] = "20px";
        div.style[config.positionY] = "20px";
        div.style.backgroundColor = config.theme === "dark" ? "#1f2937" : "#f3f4f6";
        div.style.color = config.theme === "dark" ? "white" : "black";
        div.style.padding = "1.5rem";
        div.style.borderRadius = "0.375rem";
        div.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        div.style.pointerEvents = "none";

           document.querySelector(".parent").appendChild(div);
          
          setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
            }, config.duration * 1000);

    }; 
}

let toaster = createToaster({ 
    positionX: "left",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});
toaster("Download Done");
setTimeout(() => {
    toaster("Tanisha accepted your request");
}, 2000);

setTimeout(() => {
    toaster("Diya send you a mesage");
}, 1500);