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
    const isRead = document.getElementById("isRead");


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

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

//function toggleRead(index) {
  //  myLibrary[index].toggleRead();
//}


function addBookToLibrary() {
    //taking the input and storing it into the constructor as a value
    let newBook = new Book();
    newBook.title = title.value;
    newBook.author = author.value;
    newBook.pages = pages.value;
    newBook.isRead = isRead.checked;
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
  

function clearInput(){
    title.value = '';
    author.value = '';
    pages.value = '';
    isRead.value = '';
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

       

         //the read button doesn't change colour at all
         const buttonRead = document.createElement('button');
         buttonRead.classList.add('read-button');
         buttonRead.textContent = Book.isRead ? "Read" : "Not Read";
         bookCard.appendChild(buttonRead);

         if (buttonRead.textContent === "Read"){
            buttonRead.style.backgroundColor = "green"; 
         }else{
            buttonRead.style.backgroundColor = "red";
         };


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
                 
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute("id", "remove-button");
        removeButton.classList.add('rmv-button');
        bookCard.appendChild(removeButton);

        //remove button , using 
        removeButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(Book),bookCard.id);
            bookCard.remove();  
        });

       
     
        

    })

}

const resetBook = () => {
    bookSection.innerHTML = '';
}

function getReadValue() {

}

function validateSubmit(e) {
    if(title.value == "" && author.value == "" && pages.value == ""){
        alert("Must be filled out");
        e.preventDefault();
        bookDialog.close();
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
});