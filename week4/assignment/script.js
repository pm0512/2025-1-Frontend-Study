let root = document.getElementById("root");
let button = document.getElementById("call");

function render(data) {
    for (let i=0; i<data.length; i++){
        let h2Tag=document.createElement("h2");
        h2Tag.textContent=data[0].title;
        root.appendChild(h2Tag);
    }
}
render();

button.addEventListener("click", onButtonClick);
function onButtonClick(){
    console.log("Button clicked");
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
}
