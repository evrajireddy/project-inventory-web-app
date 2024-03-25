var bookStore = [{
    name: 'Liar, Dreamer, Thief',
    author: 'Maria Dong',
    imageURL: 'https://m.media-amazon.com/images/I/81HizYCzy8L._SY522_.jpg',
    price: '28',
    stock: 'Out of Stock',
    id: 0
},
{
    name: 'Friday I\'m in Love',
    author: 'Camryn Garrett',
    imageURL: 'https://m.media-amazon.com/images/I/712quQCtsGL._AC_UY218_.jpg',
    price: '18.99',
    stock: 'In Stock',
    id: 1
},
{
    name: 'Before We Disappear',
    author: 'Shaun David Hutchinson',
    imageURL: 'https://m.media-amazon.com/images/I/81r39NQvs5S._AC_UY218_.jpg',
    price: '17.99',
    stock: 'In Stock',
    id: 2
}
];


//BOOK HTML
function getBookHTML(bookStore) {
    var bookHTML = '';
    for (let i = 0; i < bookStore.length; i++) {
        var book = bookStore[i];
        bookHTML += `<div class="book-row">
<img src="${book.imageURL}">
<div>
<h3>
<span class="book-title">${book.name}</span></h3>
</div>
<div>
<span class="book-author">${book.author}</span></div> 
<div>
<span>$${book.price}</span></div> 
<div><span class="badge bg-secondary" >${book.stock}</span></div> 
<div>
<span><button id="book-${book.id}" class="btn btn-danger" type="button" book="${book.id}" title="Remove">Remove</button></span></div>
</div> <br /><br /><br />`
    }
    return bookHTML;
}


//APPEND BOOK MARKUP ON LOAD
function addBookResources() {
    var firstColumn = document.getElementById('first-column');
    firstColumn.innerHTML = getBookHTML(bookStore);
}
addBookResources();


function removeBookFromStore(id) {
    let k;
    for (k = 0; k < bookStore.length; k++)
        if (bookStore[k].id == id)
            break;
    if (k != bookStore.length) {
        bookStore.splice(k, 1);

    }

}
function removeBookResource(event) {
    const bookRemoveButton = event.target;
    const bookNumber = bookRemoveButton.getAttribute("book");
    removeBookFromStore(bookNumber);
    addBookResources();
    addBookEventListeners();
};

function addBookEventListeners() {
    for (let j = 0; j < bookStore.length; j++) {
        var bookResource = document.getElementById('book-' + bookStore[j].id);
        bookResource.addEventListener("click", removeBookResource);

    }
}
addBookEventListeners();

var resetButton = document.getElementById('btn-reset');
resetButton.addEventListener("click", resetClick);
function resetClick(event) {
    /*
      var txtName = document.getElementById('txt-name');
      var txtAuthor = document.getElementById('txt-author');
      var txtImageURL = document.getElementById('txt-image-url');
      var txtPrice = document.getElementById('txt-price');
      var ddStock = document.getElementById('dd-stock');
  
      txtName.reset();
      txtAuthor.reset();
      txtImageURL.reset();
      txtPrice.reset();
      ddStock.reset();
  */
    var bookForm = document.getElementById('book-form');
    bookForm.reset();
}

function getMaxIdBook() {
    let maxId = bookStore.length > 0 ? bookStore[0].id : 0;
    for (let l = 1; l < bookStore.length; l++) {
        if (bookStore[l].id > maxId)
            maxId = bookStore[l];
    }

    return maxId;
}

function IsEmptyNullUndefined(item) {
    let result = true;
    if (item)
        result = false;

    return result;
}
var submitButton = document.getElementById('btn-submit');
submitButton.addEventListener('click', submitClick);
function submitClick(event) {

    let nameError = false, authorError = false, priceError = false, stockError = false;
    var txtName = document.getElementById('txt-name').value;
    var txtAuthor = document.getElementById('txt-author').value;
    var txtImageURL = document.getElementById('txt-image-url').value;
    var txtPrice = document.getElementById('txt-price').value;
    var ddStock = document.getElementById('dd-stock').value;

    if (!IsEmptyNullUndefined(txtName)) {
        txtName = txtName.trim();
        if (txtName.length <= 2)
            nameError = true;
    }
    else
        nameError = true;

    if (!IsEmptyNullUndefined(txtAuthor)) {
        txtAuthor = txtAuthor.trim();
        if (txtAuthor.length <= 2)
            authorError = true
    }
    else
        authorError = true;

    if (!IsEmptyNullUndefined(txtPrice)) {
        txtPrice = Number(txtPrice.trim());
        if (txtPrice <= 1)
            priceError = true;
    }
    else
        priceError = true;

    if (ddStock == "-1")
        stockError = true;

    var errorUL = document.getElementById('error-ul');
    errorUL.innerHTML = "";


    if (nameError) {
        let li = document.createElement("li"); // create a list item element
        li.textContent = "Name must be 3 characters or more"; // add the array item's value as textContent to the list item element
        errorUL.appendChild(li);
    }
    if (authorError) {
        let li = document.createElement("li"); // create a list item element
        li.textContent = "Author must be 3 characters or more"; // add the array item's value as textContent to the list item element
        errorUL.appendChild(li);
    }
    if (priceError) {
        let li = document.createElement("li"); // create a list item element
        li.textContent = "Price must be greater than $1"; // add the array item's value as textContent to the list item element
        errorUL.appendChild(li);
    }
    if (stockError) {
        let li = document.createElement("li"); // create a list item element
        li.textContent = "In Stock cannot be blank"; // add the array item's value as textContent to the list item element
        errorUL.appendChild(li);
    }

    if (!nameError && !authorError && !priceError && !stockError) {
        bookStore.unshift({
            name: txtName,
            author: txtAuthor,
            imageURL: txtImageURL,
            price: txtPrice,
            stock: ddStock,
            id: getMaxIdBook() + 1
        });
        addBookResources();
        addBookEventListeners();
        resetClick();
    }
}