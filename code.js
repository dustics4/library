//Data Structures

class Book {

}

class Library {
    
}

//SHOW THE DIALOG BOX
const showButton = document.getElementById("createBook")
const bookDialog = document.getElementById("bookDialog")
const buttonClose = document.getElementById("buttonClose")
const bookSection = document.querySelector(".main")
const removeButton = document.getElementById("remove-button");
let bookIsread = true;
var isFieldValidated = false;

//TAKE INPUT
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const isRead = document.getElementById("isRead");

// When clicking the submit button, it needs to run all the functions
const buttonSubmit = document.getElementById("buttonSubmit")
buttonSubmit.addEventListener('click' , (e) => {
    validateSubmit(e);
    if(isFieldValidated == true) {
        addBookToLibrary();
    }
    createBook();
    clearInput();
});

// Show the dialog box to input details
showButton.addEventListener("click", () =>{
    bookDialog.showModal(); 
});

//Closes the dialog box
buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
    clearInput();
})

//Array to hold the content of the book
const myLibrary = [
];

//constructor for the Books
function Book(title, author, pages, isRead) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


function addBookToLibrary() {
    //taking the input and storing it into the constructor as a value
    let newBook = new Book();
    newBook.title = title.value;
    newBook.author = author.value;
    newBook.pages = pages.value;
    newBook.isRead = isRead.checked;
    // Once that is done, we push the input into an array to store its value
    myLibrary.push(newBook);
} 
  
//clears all the values
function clearInput(){
    title.value = '';
    author.value = '';
    pages.value = '';
    isRead.checked = false;
    bookIsread = true;
}

//function that creates the dom elements and loops over each value
createBook = () => {
    resetBook();
    myLibrary.forEach(Book => {
        
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card1');
        bookCard.setAttribute("id", myLibrary.indexOf(Book));
        bookSection.appendChild(bookCard);

        const titleInfo = document.createElement('h1');
        titleInfo.classList.add('title-info');
        titleInfo.textContent = 'Title : ' + Book.title;
        bookCard.appendChild(titleInfo);

        const authorInfo = document.createElement('h1');
        authorInfo.classList.add('author-info');
        authorInfo.textContent = 'Author : ' + Book.author;
        bookCard.appendChild(authorInfo);

        const pagesInfo = document.createElement('h1');
        pagesInfo.textContent = 'Pages : ' + Book.pages ;
        pagesInfo.classList.add('pages-info');
        bookCard.appendChild(pagesInfo);

       

         //Button to check if something isRead. Changes colour and text when clicking
         const buttonRead = document.createElement('button');
         buttonRead.classList.add('read-button');
         buttonRead.textContent = Book.isRead ? "Read" : "Not Read";
         bookCard.appendChild(buttonRead);

         //change background colour of the code
         if (buttonRead.textContent === "Read"){
            buttonRead.style.backgroundColor = "green"; 
         }else{
            buttonRead.style.backgroundColor = "red";
         };

         //When clicking changes colour and text
         buttonRead.addEventListener('click', (event) => { 
            Book.isRead = !Book.isRead;

            if (event.target.textContent == 'Not Read'){
                event.target.textContent = "Read"
                event.target.setAttribute('id' , 'read')
                buttonRead.style.backgroundColor = "green"; 
                } else  {
                event.target.textContent = "Not Read"
                event.target.setAttribute('id' , 'Not Read')
                buttonRead.style.backgroundColor = "red";
            }

        });

        //Creating the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute("id", "remove-button");
        removeButton.classList.add('rmv-button');
        bookCard.appendChild(removeButton);

        //remove button , using splice. Number of element we want to remove
        removeButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(Book), 1);
            bookCard.remove();  
        });
    })

}

//Resets the content of the book
const resetBook = () => {
    bookSection.innerHTML = '';
}

//Supposed to validate the input
function validateSubmit(event) {
    if(title.value == "" && author.value == "" && pages.value == ""){
        event.preventDefault();
        alert("Must be filled out");
        isFieldValidated = false;
    }else{
        bookDialog.close();
        isFieldValidated = true;
        return false;
    }
}


