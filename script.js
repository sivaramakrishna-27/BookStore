
document.querySelector(".button-container")
.addEventListener("click",() =>{
    let text = document.getElementById("filter-books").value;
    getBooks().then(books => {
        let filteredBooks = filterBooks(books,text);
        showBooks(filteredBooks);
    })
})

function getBooks(){
    return fetch("data.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        return data
    })
}

function filterBooks(books,searchText){
    if(searchText){
        let filteredBooks = books.filter(book =>{
            if (book.bookname.toLowerCase().includes(searchText)) {
                return true;
            }else{
                return false;
            }
        })
        return filteredBooks;
    }else{
        return books;
    }
}




function showBooks(books){
    console.log(books);

    let productcontainer = document.querySelector(".product-container");
    let bookHTML =""
    books.forEach(book => {
        console.log(book)
        
        bookHTML += `

            <div class="row">
                <div class="col-4">
                    <div class="image">
                        <img src="${book.logo} ">
                    </div>
                    <h4 class="course-name">${book.bookname}</h4>
                    <p class="price">${book.price}</p>
                    <div class="button-container">
                        <span>Add to cart</span> 
                    </div>
                </div>
            </div>
        
        `

    });

    productcontainer.innerHTML = bookHTML;

}

getBooks().then(data => {
    showBooks(data)
});
