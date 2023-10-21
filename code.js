//SHOW THE DIALOG BOX
const showButton = document.getElementById("createBook")
const bookDialog = document.getElementById("bookDialog")
const buttonSubmit = document.getElementById("buttonSubmit")
const buttonClose = document.getElementById("buttonClose")
const bookSection = document.querySelector(".main")

//TAKE INPUT
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");

showButton.addEventListener("click", () =>{
    bookDialog.showModal(); 
});

buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
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

function Book(title, author, pages) {
  // the constructor...
  // create the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;

}


function addBookToLibrary() {
    let newBook = new Book();
    newBook.title = title.value;
    newBook.author = author.value;
    newBook.pages = pages.value;

    console.log(newBook);
    myLibrary.push(newBook);

    myLibrary.forEach((myLibrary) => {
        myLibrary.title = newBook.title;
        console.log(myLibrary.title);
    })
  // create array to loop through each array
    //user form query selector to take input
    // create variables to put it into here
    // When you get to read, create a function getReadValue().checked
}

function printBook(){

}

function clearInput(){
    title.value = '';
    author.value = '';
    pages.value = '';
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
buttonSubmit.addEventListener("click" , (e) => {
    e.preventDefault();
    addBookToLibrary();
    bookDialog.close();

})