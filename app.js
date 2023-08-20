document.addEventListener("DOMContentLoaded", function(){

let booksLibrary = [];
let titInp = document.querySelector('[data-title]'); 
let authInp = document.querySelector('[data-author]'); 
let pagInp = document.querySelector('[data-pages]'); 
let openModal = document.querySelector('[data-open]'); 
let modal = document.querySelector("[data-dialog]"); 
let cancel = document.querySelector("[data-cancel]"); 
let addNew = document.querySelector("[data-add]"); 
let libGrid = document.querySelector(".lib"); 
//Book constructor
function Book(title , author , pages){
    this.title = title ; 
    this.author = author ; 
    this.pages = pages ; 
};
//adding Function 
function addBook(){
    //checking Null values
    if(titInp.value ==='' || authInp.value==="" || pagInp.value===""){ 
        window.alert("You didn't fill the input fields"); 
        return ;
    }

    let title = titInp.value ;
    let author = authInp.value ; 
    let pages = pagInp.value ; 
    
    let book =  new Book(title, author , pages);  
    booksLibrary.unshift(book); 
    //reseting input values
    titInp.value = ""; 
    authInp.value = ""; 
    pagInp.value = ""; 
    modal.close();
    //creating the card
    let cardBook = document.createElement("div"); 
    let bookTitle = document.createElement("h4"); 
    let bookAuthor = document.createElement("div"); 
    let bookPages = document.createElement("div"); 

    cardBook.classList.add("cardBox");
    bookTitle.textContent = `title is:  ${title}` ; 
    bookAuthor.textContent = `Author:  ${author}` ; 
    bookPages.textContent = `${pages}  Pages`; 

    cardBook.appendChild(bookTitle); 
    cardBook.appendChild(bookAuthor);
    cardBook.appendChild(bookPages);   
    libGrid.appendChild(cardBook); 
}; 
/*
function showBooks(){
    booksLibrary.forEach((book)=>{
        console.table(book); 
    })
};
*/

//event listeners
cancel.addEventListener("click" , ()=> {
    modal.close(); 
})

openModal.addEventListener("click", ()=>{
     modal.showModal(); 
});

addNew.addEventListener("click" , (e) => {
    addBook(); 
    e.preventDefault();
}); 

});





