'use strict';

(function addEvents() {
        document.getElementById('clear').addEventListener("click", clearData, false);
        document.getElementById('store').addEventListener("click", storeData, false);
})();

function storeData() {
    var name = document.getElementById('bookName').value;
    var isbn = document.getElementById('bookISBN').value;
    var publisher = document.getElementById('bookPublisher').value;
    //Implement more options to store by
    var book = {
        "name": name,
        "isbn": isbn,
        "publisher": publisher
    };
    localStorage.setItem(isbn, JSON.stringify(book));

    document.getElementById('formData').reset();
}

function clearData() {
    localStorage.clear();
    location.reload();
}