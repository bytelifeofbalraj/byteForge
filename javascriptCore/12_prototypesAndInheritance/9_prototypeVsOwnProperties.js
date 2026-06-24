// Create a constructor `Book` that sets `this.title = 'Novel'`. Add `pages: 200` to Book.prototype. Create a book instance. Use hasOwnProperty to check if book has own property 'title'. Store result in `hasTitleOwn` and log it.

function Book(){
    this.title = 'Novel'
}

Book.prototype.pages = '200'

let book = new Book()

let hasTitleOwn = book.hasOwnProperty('title')

console.log(hasTitleOwn)