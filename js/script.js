const plus = document.querySelector('.plus');
let add_book_collection = document.querySelectorAll('.add_book');

// let prev_book_collection = document.querySelectorAll('.add_book');
let prev_book = add_book_collection[0];


plus.addEventListener('click', function(){

    add_book_collection = document.querySelectorAll('.add_book');
    len = add_book_collection.length;
    prev_book = add_book_collection[len-1];

    prev_book.insertAdjacentHTML('afterend', `<div class="add_book">
    <div class="stars">
      <p class="star star1"></p>
      <p class="star star2"></p>
      <p class="star star3"></p>
      <p class="star star4"></p>
      <p class="star star5"></p>
      <p class="star star6"></p>
      <p class="star star7"></p>
      <p class="star star8"></p>
      <p class="star star9"></p>
      <p class="star star10"></p>
    </div>
    <input autocomplete="off" placeholder="Add a book" class="input_book" type="text">
    
  </div>`);


    // add_book_collection = document.querySelectorAll('.add_book');
    // len = add_book_collection.length;
    // prev_book = add_book_collection[len-1];

    add_book_collection = document.querySelectorAll('.add_book');
    
})


const content_block = document.querySelector('.content_block');
let starts_collection = document.querySelectorAll('.stars p');

// console.log(starts_collection);


content_block.addEventListener('click', function(elem){
  let starId = 0;
  let bookId = 0;
  // Определение индекса книги
  for(bookIndex=0; bookIndex<=add_book_collection.length; bookIndex++){
    if (add_book_collection[bookIndex]==elem.path[2]){
      bookId=bookIndex;
    }
  }

  starts_collection = add_book_collection[bookId].querySelectorAll('.stars p');
  if(elem.path[0].classList.contains('star')){
    for(i=0; i<=starts_collection.length; i++){
      if (starts_collection[i]==elem.path[0]){
        starId=i;
      }
    }
    for(i=0; i<=starts_collection.length; i++){
      if (i<=starId){
        starts_collection[i].classList.add('star_active');
      }
      else{
        if(starts_collection[i].classList.contains('star_active')==true){
        //  TODO: FIX ERROR
          starts_collection[i].classList.remove('star_active');
        }
      }
    }
  }

})



const carts_books = document.querySelector('.carts_books');
const get_button = document.querySelector('.get_button');
get_button.addEventListener('click', function(){
  carts_books.classList.add('carts_books_active');
  carts_books.scrollIntoView({
    top: true,
    behavior: "smooth"
  });
  
})


const menu_burger = document.querySelector('.menu_burger');
const content = document.querySelector('.content');
menu_burger.addEventListener('click', function(){
  content.scrollIntoView({
    top: true,
    behavior: "smooth"
  });
  
})