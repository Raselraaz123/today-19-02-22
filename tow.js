document.getElementById("border").addEventListener('click', function () {
    const container = document.getElementById('full-container');
    container.style.border = "5px solid red"
})
document.getElementById('bg-color').addEventListener("click", function () {
    const items = document.getElementsByClassName("friend");
    for (const item of items) {
        item.style.backgroundColor = "#aabc12"

    }
})
document.getElementById('new-item').addEventListener("click", function () {
    const comon = document.getElementById('full-container');
    const newfrind = document.createElement('div')
    newfrind.classList.add("friend")
    newfrind.innerHTML =`   <h2 class="friend-name">frien-new</h2>
                <p>Numquam, quod nam maiores illo vero omnis enim at voluptatem!</p> `
    comon.appendChild(newfrind)
})


function color() {
    const addColor = document.getElementsByClassName("friend")
    for (const add of addColor) {
        add.style.color = "pink"
    }

}