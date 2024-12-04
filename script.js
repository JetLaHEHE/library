const myLibrary = [];
let bookCount = 0;

function Book(name, year, author, isRead) {
  this.name = name;
  this.year = year;
  this.author = author;
  this.isRead = isRead;

}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook() {
  const library = document.querySelector(".library");

  library.innerHTML = '';

  for (let x = 0; x < myLibrary.length; x++) {
    console.log(myLibrary);
    const innerContainer = document.createElement('div');
    innerContainer.className = `innerContainer`;

    library.appendChild(innerContainer);

    const name = document.createElement("h1");
    const year = document.createElement("h2");
    const author = document.createElement("h2");
    const isRead = document.createElement("h3");
    const btnRead = document.createElement("button");

    btnRead.className = "btnRead";

    btnRead.innerText = 'Toggle read';
    isRead.innerText = "Have not read";
    name.innerText = myLibrary[x].name;
    year.innerText = myLibrary[x].year;
    author.innerText = myLibrary[x].author;

    innerContainer.appendChild(name);
    innerContainer.appendChild(year);
    innerContainer.appendChild(author);
    innerContainer.appendChild(isRead);
    innerContainer.appendChild(btnRead);

    btnRead?.addEventListener("click", (event) => {
      if(isRead.innerText == "Have not read"){
        isRead.innerText = 'Have read';
      }
      else {
        isRead.innerText = 'Have not read';
      }
      
    });

  }

}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#btnClose");
const btnSubmit = document.querySelector("#submit");

const bookYear = document.querySelector("#bookYear");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  if (bookAuthor.value === '' || bookTitle.value === '' || bookAuthor.value === '') {
    alert("Please fill all the fields!");
  }
  else {
    bookCount++;

    const book = new Book(bookTitle.value, bookYear.value, bookAuthor.value, false);

    addBookToLibrary(book);

    dialog.close();

    displayBook();
  }

  console.log("Clicked submit");
});


// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
