let myLibrary = [];

const mainDisplay = document.getElementById("main");



// Book Constructor
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        if (haveRead) {
            let reading = "have already read"
        }
        else {
            let reading = "not read yet"
        }
        let result = "" + title + " by " + author + ", " + pages + " pages, " + reading;
        return result;
    }
}

function addBookToLibrary(book) {
myLibrary.push(book);
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

    //Add content
        title.textContent = element.title;
        author.textContent = element.author;
        pages.textContent = element.pages;
        if (element.haveRead == true) {
            read.textContent = "COMPLETED";
        }

    //Append these onto #main
        li.appendChild(title);
        li.appendChild(author);
        li.appendChild(pages);
        li.appendChild(read);
        mainDisplay.appendChild(li);
    });  
}


//Initial books in library setup
var book1 = new Book("White Fang", "Jack London", 298, true);
var book2 = new Book("The Long Walk", "Stephen King", 384, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks(myLibrary);
