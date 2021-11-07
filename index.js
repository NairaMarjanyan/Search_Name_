let users = [
    "Mark",
    "Nick",
    "Tim",
    "Yan",
    "Mika"
];

let searchName = "";

const input = document.querySelector("input");
input.addEventListener("keyup", (e) => {
    searchName = e.target.value;
    refresh();
});

let id;
function refresh() {
    if (id !== undefined) {
        clearTimeout(id);
    }
    id = setTimeout( () => {
        render();
    }, 1000)
}
refresh();

const root = document.querySelector("#root");

function render() {
    root.innerHTML = "";

    users.filter( (userName) => {
        return userName.indexOf(searchName) !== -1;
    }).map((userName) => {
        const div = document.createElement("div");
        div.innerText = userName;
        return div;
    }).forEach((item) => {
        root.appendChild(item);
    })
}
render()