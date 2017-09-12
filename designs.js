
// When size is submitted by the user, call makeGrid()
const submitButton = document.getElementById("submit_button");
submitButton.addEventListener("click",makeGrid);
function makeGrid() {
    let height = document.getElementById("input_height").value;
    let width = document.getElementById("input_width").value;
    let color = document.getElementById("colorPicker").value;
    console.log(height);
    console.log(width);
    console.log(color);
}
