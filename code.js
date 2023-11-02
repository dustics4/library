// notes for next update:
//create a remove button on each display :
// Create a DOM button element
// then create a eventlistener - what the button does.
// how to remove DOM elements

//add button on each book to change it's read status
//Create an edit button for the content to update pages



//SHOW THE DIALOG BOX
const showButton = document.getElementById("createBook")
const bookDialog = document.getElementById("bookDialog")
const buttonSubmit = document.getElementById("buttonSubmit")
const buttonClose = document.getElementById("buttonClose")
const bookSection = document.querySelector(".main")
const removeButton = document.getElementById("remove-button");

//TAKE INPUT
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");

// Show the dialog box to input details
showButton.addEventListener("click", () =>{
    bookDialog.showModal(); 
});

//Closes the dialog box
buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
})



//Array to hold the content of the book
const myLibrary = [
    {
        title: "Harry Potter",
        author: "J.K Rowling",
        pages: "none"
    }
];

//constructor for the Books
function Book(title, author, pages) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
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
  



function removeBook(){
    const element = document.getElementById("book-card");
    element.classList.remove("book-card1");
}

function clearInput(){
    title.value = '';
    author.value = '';
    pages.value = '';
}

createBook = () => {
    resetBook();
    myLibrary.forEach(Book => {
        
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card1');
        bookCard.setAttribute("id", myLibrary.indexOf(Book));
        bookSection.appendChild(bookCard);

        const titleInfo = document.createElement('h1');
        titleInfo.classList.add('title-info');
        titleInfo.textContent = Book.title;
        bookCard.appendChild(titleInfo);

        const authorInfo = document.createElement('h1');
        authorInfo.classList.add('author-info');
        authorInfo.textContent = Book.author;
        bookCard.appendChild(authorInfo);

        const pagesInfo = document.createElement('h1');
        pagesInfo.textContent = Book.pages ;
        pagesInfo.classList.add('pages-info');
        bookCard.appendChild(pagesInfo);

        //for some reason the book is only removed after clicking the remove button, then subitting a new book
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute("id", "remove-button");
        removeButton.classList.add('rmv-button');
        bookCard.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(Book),1);
        });

        //the read button doesn't change colour at all
        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        bookCard.appendChild(readButton);   

        if(Book.read === "true"){
            readButton.textContent = 'Not Read';
            readButton.style.backgroundColor = '#e04f63';
        }else {
            readButton.textContent === 'Read';
            readButton.style.backgroundColor = '#63da63'
        }

        readButton.addEventListener('click', () => { 
            Book.read = !Book.read;
        });

    })
    
}


const resetBook = () => {
    bookSection.innerHTML = '';
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

// When clicking the submit button, it needs to run all the functions
buttonSubmit.addEventListener("click" , (e) => {
    e.preventDefault();
    validateSubmit();
    addBookToLibrary();
    createBook();
    clearInput();
})

//buttonRemove.addEventListener("click", () =>{
 //   removeBook();
//});
