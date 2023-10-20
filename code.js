//SHOW THE DIALOG BOX
const showButton = document.getElementById("createBook")
const bookDialog = document.getElementById("bookDialog")
const buttonSubmit = document.getElementById("buttonSubmit")
const buttonClose = document.getElementById("buttonClose")
const output = document.querySelector("output")

//TAKE INPUT
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

showButton.addEventListener("click", () =>{
    bookDialog.showModal();
});

buttonClose.addEventListener("click", () => {
    bookDialog.close();
})

//Array to hold the content of the book
//how to use push in array
const myLibrary = [
    {
        title: "The Hobit by J.R.R",
        author: "Tolkien",
        pages: "295 pages",
    }
];

function Book(title, author, pages, read) {
  // the constructor...
  // create the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

  // do stuff here
//user form query selector to take input
// create variables to put it into here
// e.g let title = $titleINput.value;
// When you get to read, create a function getReadValue().checked
  return new Book(title,author,pages,read);
  
}

function createBook(){
    //from the users input 
    //create function for DOM elements
    //create the view here
    //title.text content = this.title
}

function getReadValue() {

}

//Create a function to show the input on the page
// When clicking the submit button, it needs to run all the functions
buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    bookDialog.close(console.log("sent")); // Have to send the select box value here.
});