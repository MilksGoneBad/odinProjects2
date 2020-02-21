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