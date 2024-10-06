const myLibrary = [];

function createBook(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  const container = document.querySelector('.content')
  container.innerHTML = ""
  myLibrary.forEach((book, index)=>{
    //Criando a div card
    const cardDiv = document.createElement('div');
    cardDiv.classList = 'card';
    //Nome do livro
    const cardName = document.createElement('h3');
    cardName.innerHTML = book.name;
    cardName.className = 'cardTitle';
    //Nome do autor
    const cardAuthor = document.createElement('p');
    cardAuthor.innerHTML = book.author;
    cardAuthor.className = 'cardAuthor'
    //Quantia de páginas
    const cardPages = document.createElement('p');
    cardPages.innerHTML = book.pages + " Pages";
    cardPages.classList = 'cardPages';
    //O livro ja foi lido?
    const cardRead = document.createElement('p');
    cardRead.classList = 'cardRead'
    if(book.read == true) cardRead.innerHTML = "Read";
    else cardRead.innerHTML = "Not Read";

    // Botão de Status
    const buttonStatus = document.createElement('button');
    buttonStatus.innerHTML = 'Status';
    buttonStatus.id = 'buttonStatus'
    buttonStatus.addEventListener('click', () => {
      //console.log(`Status of "${book.name}": ${book.read ? "Read" : "Not Read"}`);
      myLibrary[index].read = !myLibrary[index].read;
      console.log(myLibrary[index].read)
      addBookToLibrary();
    });

    // Botão de Delete
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = 'Delete';
    buttonDelete.id = 'buttonDelete'
    buttonDelete.addEventListener('click', () => {
      //console.log(`Deleting "${book.name}" from library.`);
      myLibrary.splice(index, 1);
      addBookToLibrary();
    });

    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardPages);
    cardDiv.appendChild(cardRead);
    cardDiv.appendChild(buttonStatus);
    cardDiv.appendChild(buttonDelete);


    container.appendChild(cardDiv);
  })
}

const btnBook = document.getElementById('btnBook');
const showForm = document.querySelector('.fAddBook');
const form = document.getElementById('bookForm');
const btnAdd = document.getElementById('submitBook')
const btnCancel = document.getElementById('cancelBook')

const author = document.getElementById('author');
const bookName = document.getElementById('bookName');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

form.addEventListener('submit', (event)=>{
  event.preventDefault();
})

btnAdd.addEventListener('click', ()=>{
  //Criar um livro novo e adicionar dentro do array
  var newBook = new createBook(bookName.value, author.value,
  pages.value, read.checked)
  console.log("Nome = " + author.value)
  myLibrary.push(newBook)

  if(showForm.style.display = "flex"){
    bookName.value = ""
    author.value = ""
    pages.value = ""
    read.value = false;
    showForm.style.display = "none"
  }

  addBookToLibrary();
})

btnCancel.addEventListener('click', ()=>{
  //Cancela o livro atual
  if(showForm.style.display = "flex"){
    bookName.value = ""
    author.value = ""
    pages.value = ""
    read.value = false;
    showForm.style.display = "none"
  }
})

btnBook.addEventListener('click', ()=>{
    if(showForm.style.display = "none"){
        showForm.style.display = "flex"
    }
    var newBook = new createBook("cleber")
    console.log(myLibrary)
})