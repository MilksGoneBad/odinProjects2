let myLibrary = [];
var boxIsClicked = false;
const mainDisplay = document.getElementById("main");
const addForm = document.forms['add-book'];
const list = document.getElementById('main');

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTitle = addForm.querySelector('input[name="newtitle"]').value;
    const newAuthor = addForm.querySelector('input[name="newauthor"]').value;
    const newPages = addForm.querySelector('input[name="newpages"]').value;
    var aBook = new Book(newTitle, newAuthor, newPages, boxIsClicked);
    var miniLibrary = [];
    miniLibrary.push(aBook);
    addBookToLibrary(aBook);
    displayBooks(miniLibrary);
});

// Book Constructor
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//handler for checkbox click
function handleClick(box) {
    boxIsClicked = !boxIsClicked;
}

//function to cycle through myLibrary and render each
function displayBooks(library) {
    //Begin cycling through library
    library.forEach(element => {

    //Create an element for each of the book object's keys wrapped up together
        const li = document.createElement('li');
        const title = document.createElement('span')
        const author = document.createElement('span');
        const pages = document.createElement('span');
        const read = document.createElement('span');
        const deleteButton = document.createElement('button');
        const readButton = document.createElement('button');
        const breakA = document.createElement('br');

    //Add content
        title.textContent = element.title;
        author.textContent = element.author;
        pages.textContent = element.pages;
        if (element.haveRead == true) {
            read.textContent = "COMPLETED";
        }
        deleteButton.textContent = "Delete";
        readButton.textContent = "Change Read Status"


    //Append these onto #main
        li.appendChild(title);
        title.classList.add('title');
        li.appendChild(author);
        li.appendChild(pages);
        li.appendChild(read);
        li.appendChild(breakA);
        li.appendChild(deleteButton);
        deleteButton.classList.add('delete-button');
        li.appendChild(readButton);
        readButton.classList.add('read-button');
        mainDisplay.appendChild(li);
    });  
}

//Initial books in library setup
var book1 = new Book("White Fang", "Jack London", 298, true);
var book2 = new Book("The Long Walk", "Stephen King", 384, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks(myLibrary);

//deleting books and changing status
list.addEventListener('click', function(clickee) {
    const li = clickee.target.parentElement;
    if (clickee.target.className == "delete-button") {
        li.parentElement.removeChild(li);
    }
    if (clickee.target.className == "read-button") {
        li.haveRead = !li.haveRead;
        if (li.childNodes[3].innerText == "COMPLETED") {
            li.childNodes[3].innerText = ""
        }
        else {
            li.childNodes[3].innerText = "COMPLETED";
        }
    }
})

