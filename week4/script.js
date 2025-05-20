let root = document.getElementById("root");
let button = document.getElementById("call");

function render(data) {
    for (let i=0; i<data.length; i++){
        //console.log("1. h2 태그를 만들기");
        let h2Tag=document.createElement("h2");
        //console.log("2. h2 태그에 'data'라는 텍스트를 넣기");
        h2Tag.textContent=data[0].title;
        //console.log("3. h2 태그를 root에 추가하기");
        root.appendChild(h2Tag);
        //return console.log("4. 화면을 확인하기");
    }
}
render();

button.addEventListener("click", onButtonClick);
function onButtonClick(){
    console.log("Button clicked");
    fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
    .then((response) => response.json())
    .then((json) => console.log(json));
}