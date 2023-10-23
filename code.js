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
    //taking the input and storing it into the constructor as a value
    let newBook = new Book();
    newBook.title = title.value;
    newBook.author = author.value;
    newBook.pages = pages.value;

    // We show the input to see if it is getting the correct information
    //console.log(newBook);
    // Once that is done, we push the input into an array to store its value
    myLibrary.push(newBook);

    // we loop through each of the values in the array , to get what we would like which is the input
    //myLibrary.forEach((myLibrary) => {
    //    myLibrary.title = newBook.title;
   //     console.log(myLibrary.title);
   // })
    // When you get to read, create a function getReadValue().checked
}

function printBook(){
 //need to loop through array 
 // run through createbook
}

function clearInput(){
    title.value = '';
    author.value = '';
    pages.value = '';
}

function createBook(book){
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');


    bookCard.classList.add('book-card');

    //needs fixing, check how you can display the inut in a DOM
    //Create the isread check box
    
    title.textContent = '"${book.title}"'
    author.textContent = book.author
    pages.textContent = '${book.pages}  pages'

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookSection.appendChild(bookCard);


    //from the users input 
    //create function for DOM elements
    //create the view here
    //title.text content = this.title
}

function getReadValue() {

}

function validateSubmit() {
    if(title.value == "" && author.value == "" && pages.value == ""){
        alert("Must be filled out");
    }else{
        bookDialog.close();
        return false;

    }
}

//Create a function to show the input on the page

// When clicking the submit button, it needs to run all the functions
buttonSubmit.addEventListener("click" , (e) => {
    e.preventDefault();
    validateSubmit();
    addBookToLibrary();
    createBook();
})