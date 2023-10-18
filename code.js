//SHOW THE DIALOG BOX
const showButton = document.getElementById("createBook")
const bookDialog = document.getElementById("bookDialog")
const buttonSubmit = document.getElementById("buttonSubmit")
const buttonClose = document.getElementById("buttonClose")
const output = document.querySelector("output")

showButton.addEventListener("click", () =>{
    bookDialog.showModal();
});

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    bookDialog.close(console.log("sent")); // Have to send the select box value here.
});


buttonClose.addEventListener("click", () => {
    bookDialog.close();
})

const myLibrary = [
    {
        title: "The Hobit by J.R.R",
        author: "Tolkien",
        pages: "295 pages",
        read: false,
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
}

function takeInput() {
    //take users input and store it in myLibrary
    const book = new Book(title,author,pages,read);
}