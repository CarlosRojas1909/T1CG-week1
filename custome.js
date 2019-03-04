//  VARIABLES IN THE GLOBAL SCOPE

//Selected Targets
const videoToggle = document.getElementById("jenniferVideo");
const pictureToggle = document.getElementById("jenniferPic");
const textArea = document.querySelector(".area__textarea");
const titleInput = document.querySelector(".movie__title");
const yearInput = document.querySelector(".movie__year");
const trivia = document.getElementById("trivia__game");
const questionTrivia = document.querySelector(".questionTrivia");
const table = document.querySelector(".table__list");
const sectionArea = document.querySelector(".area");
const dateInput = document.querySelector(".date");
const triviaInput = document.getElementById("triviaId");
const bottomBlock = document.getElementById("bottom__block");

const questions = [
                    "What is Jennifer Aniston's middle name? a: Brenda  b: Megan c: Joanna",
                   "How old is Jennifer Aniston in 2019? a: 50 b: 52 c: 49",
                    "What is Jennifer Aniston's height? a: 5'6 b: 5'5 c: 5'8" ]

 let randomIndex = Math.floor(Math.random() * questions.length);

 //this span will be created to display a message if the answer is right or wrong
 let answerOne = document.createElement("span");
    answerOne.id = "newSpan";

 let displayQuestion =  questions[randomIndex];

 let element;

 


//============================================================================================================
//Unable to debugged problem on trivia game section, everytime a click on trivia button , all random questions are piling up

// Funtion to toggle pictire to youtube video
videoToggleFunc = () => {
    videoToggle.classList.toggle("classHidden");
    pictureToggle.classList.toggle("classHidden");


}

//Trivia
initialQuestion = () => {

    //this span will be created to display my question at the beginning of the game
       element = document.createElement("span")
        element.innerHTML = displayQuestion;
        
        questionTrivia.appendChild(element);


       
    };
   

triviaToggleFunc = () => {

        trivia.classList.toggle("classHidden");
        
        initialQuestion();
  
};




answerQuestion = () => {

    initialQuestion();
    
    bottomBlock.insertAdjacentElement("afterbegin", answerOne)
    
    switch (randomIndex) {
        case 0:
            //do something
            questionOneHandler();
            
            break;
        case 1:
            //do something
            questionTwoHandler()
            break;
        case 2:
            //do something
            questionThreeHandler();
            break;
    }
    triviaInput.value = "";
  

}

   
questionOneHandler = () => {

        switch (triviaInput.value) {

         case "a":
         case "b":
            answerOne.innerHTML = "Wrong!!!";
            break;
         case "c":
            answerOne.innerHTML = "Correct Answer!!!";
        break;
    }
    

}


questionTwoHandler = () => {
   
    switch (triviaInput.value) {
         case "a":
            answerOne.innerHTML = "Correct Answer!!!";

            break;
         case "b":
         case "c":
            answerOne.innerHTML = "Try again!";
            break;
    }

}


questionThreeHandler = () => {
    
    switch (triviaInput.value) {
         case "b":
            answerOne.innerHTML = "Correct Answer!!!";
            break;
         case "a":
         case "c":
            answerOne.innerHTML = "Try again!"
        break;
    }

}

// next question Button
nextQuestion = () => {

    if(answerOne.innerHTML === "Correct Answer!!!") {

        element.innerHTML = "";
        randomIndex = Math.floor(Math.random() * questions.length);
        answerOne = document.createElement("span");
        displayQuestion =  questions[randomIndex];

   
        initialQuestion();
    } 

 
}

resetGame = () => {

    if(answerOne.innerHTML !== ""){
        
        answerOne.innerHTML = "";
        nextQuestion();
    }    
}



// Function to add rows and cell to Table, once adding a movie title and year, the gernes are randomly chosen.
addToTable = () => {



    const arr = ["comedy", "drama", "fiction", "Horror", "Thriller"];
    const random = Math.floor(Math.random() * arr.length);

    if (titleInput.value !== "" && yearInput.value !== "") {
        
    
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

deleteRow = () => {

    table.deleteRow(-1);
}


//textArea functinality

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