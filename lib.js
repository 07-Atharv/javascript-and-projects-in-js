// create a class library and implement the following:
// getBoollist() = List of available books
// issueBook(Bname,usrname)
// returnBook(bookName)
// constr_should_take_book_list 
console.log("Hey what is your name.....");
class Library 
{
    constructor(bookList)
    {
        this.bookList = bookList ;
        this.issuedBooks = {} ;
    }
    getBookList()
    {

        this.bookList.forEach(element => 
        {
        console.log(element);
        });
    }
    issueBook(bookName,userName)
    {
            if(this.issuedBooks[bookName]==undefined)
            {
            this.issuedBooks[bookName] = userName ;  // Key value concept
            }
            else
            {
                console.log("These book is already issued");
            }
    }
    returnBook(bookName)
    {
        delete this.issuedBooks[bookName];
    }
}
var pep = new Library(["A","B","C","D","R"]);
console.log(pep.getBookList());