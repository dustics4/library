function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read
    this.info = function() {
        console.log(title, author, pages, read)
    }
}

const theHobbit = new Book('The Hobit by J.R.R.', 'Tolkien' ,'295 pages' , 'not read yet');
console.log(theHobbit.info());


//SHOW THE DIALOG BOX

const showButton = document.getElementById("createBook")
const bookDialog = document.getElementById("bookDialog")
const buttonSubmit = document.getElementById("buttonSubmit")
const buttonClose = document.getElementById("buttonClose")
 

const output = document.querySelector("output")

showButton.addEventListener("click", () =>{
    bookDialog.showModal();
});

bookDialog.addEventListener("close", (e) => {
    output.value =
      bookDialog.returnValue === "default"
        ? "No return value."
        : `ReturnValue: ${bookDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    bookDialog.close(console.log("sent")); // Have to send the select box value here.
});

buttonClose.addEventListener("click", () => {
    bookDialog.closest("nothingChosen");
})
