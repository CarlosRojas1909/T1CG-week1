const videoToggle = document.getElementById("jenniferVideo");
const pictureToggle = document.getElementById("jenniferPic");
const textArea = document.querySelector(".area__textarea");
const sectionArea = document.querySelector(".area");
const table = document.querySelector(".table__list");
const titleInput = document.querySelector(".movie__title");
const yearInput = document.querySelector(".movie__year");
const dateInput = document.querySelector(".date");

videoToggleFunc = () => {
    videoToggle.classList.toggle("classHidden");
    pictureToggle.classList.toggle("classHidden");

}

addToTable = () => {


    if (titleInput.value !== "" && yearInput.value !== "") {
        const arr = ["comedy", "drama", "fiction", "Horror", "Thriller"];
    const random = Math.floor(Math.random() * arr.length);
    
    const newRow = table.insertRow(-1);

    const newCell0 = newRow.insertCell(0);
    const newCell1 = newRow.insertCell(1);
    const newCell2= newRow.insertCell(2);

    const newTextCell0 = document.createTextNode(arr[random])
    const newTextCell1 = document.createTextNode(titleInput.value)
    const newTextCell2 = document.createTextNode(yearInput.value)

    newCell0.appendChild(newTextCell0);
    newCell1.appendChild(newTextCell1);
    newCell2.appendChild(newTextCell2);

    titleInput.value = "";
    yearInput.value = "";
    
    }
    
}



submitFunc = () => {

    // method #1
    // const element = document.createElement("p");
    // const newContent = document.createTextNode(new Date() + ": " + textArea.value);

    // element.appendChild(newContent);
    // sectionArea.insertAdjacentElement("beforeend", element);

    // method #2

    if(textArea.value !== "") {

        const element = document.createElement("p");
        element.id = "new__element"
        element.innerHTML = new Date() + ": " + textArea.value;
        sectionArea.appendChild(element)
        textArea.value = "";
    
        element.onclick = deleteNewElement = () => {
        element.parentNode.removeChild(element)
        }

    } 
   

} 