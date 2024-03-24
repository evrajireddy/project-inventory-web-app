var bookStore=[{
    name:'Liar, Dreamer, Thief',
    author: 'Maria Dong',
    imageURL:'https://m.media-amazon.com/images/I/81HizYCzy8L._SY522_.jpg',
    price: '28',
    stock:'Out of Stock',
    id:1
},
{
    name:'Friday I\'m in Love',
    author: 'Camryn Garrett',
    imageURL:'https://m.media-amazon.com/images/I/712quQCtsGL._AC_UY218_.jpg',
    price: '18.99',
    stock:'In Stock',
    id:2
},
{
    name:'Before We Disappear',
    author: 'Shaun David Hutchinson',
    imageURL:'https://m.media-amazon.com/images/I/81r39NQvs5S._AC_UY218_.jpg',
    price: '17.99',
    stock:'In Stock',
    id:3
}
];



//ADDING SUBMIT LOGIC
function addBook() {
    alert ("Hello World!");
}

var btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", addBook);


//BOOK HTML
function getBookHTML (bookStore){
var bookHTML = '';
for (var i=0; i<bookStore.length; i++){
    var book = bookStore[i];
bookHTML+=`<div style="display:inline-block;">
<img src="${book.imageURL}">
<h3>
<span class="book-title">${book.name}</span> <br /> </h3>
<span class="book-author">${book.author}</span><br /> 
<span>$${book.price}</span><br /> 
<span>${book.stock}</span><br /> 
<span><button id="book-${book.id}" type="button" title="Remove">Remove</button></span>
</div> <br /><br /><br />`
}
return bookHTML;
}

//APPEND BOOK MARKUP ON LOAD
var firstColumn = document.getElementById('first-column');
firstColumn.innerHTML = getBookHTML(bookStore);
