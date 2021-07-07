const books = [
    { name: 'Kitap 1', author: 'Yazar 1'},
    { name: 'Kitap 2', author: 'Yazar 2'},
    { name: 'Kitap 3', author: 'Yazar 3'}
];

const listBook = () => {
    books.map(b => {
        console.log(b.name)
    });
};

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

addBook({name: 'Kitap 4', author: 'Yazar 4'}, listBook);