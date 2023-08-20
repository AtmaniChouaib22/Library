let booksLibrary = [];
let titInp = document.querySelector('[data-title]'); 
let authInp = document.querySelector('[data-author]'); 
let pagInp = document.querySelector('[data-pages]'); 
let openModal = document.querySelector('[data-open]'); 
let modal = document.querySelector("[data-dialog]"); 
let cancel = document.querySelector("[data-cancel]"); 
let addNew = document.querySelector("[data-add]"); 

function Book(title , author , pages){
    this.title = title ; 
    this.author = author ; 
    this.pages = pages ; 
};

function addBook(){
    
    let title = titInp.value ;
    let author = authInp.value ; 
    let pages = pagInp.value ; 
    
    let book =  new Book(title, author , pages);  
    booksLibrary.unshift(book); 
    //reseting input values
    titInp.value = ""; 
    authInp.value = ""; 
    pagInp.value = ""; 
}; 

cancel.addEventListener("click" , ()=> {
    modal.close(); 
})

function showBooks(){
    booksLibrary.forEach((book)=>{
        console.table(book); 
    })
};


openModal.addEventListener("click", ()=>{
     modal.showModal(); 
});

addNew.addEventListener("click" , (e) => {
    addBook(); 
    showBooks(); 
    e.preventDefault();
    modal.close();
}); 



