var fs = require('fs');


fs.readFile("dosya.txt","utf8", (e, d) => {
    e ? () => {
        throw e;
    } : '';
    console.log(d);
});


fs.writeFile("dosya2.txt", 'denemee', function(hata) {
    if (hata) {
        throw hata;
    }
});

fs.appendFile('dosya2.txt', 'Engin', (e) => {
    e ? () => {
        throw e;
    } : '';
})


fs.unlink('dosya2.txt', (e) => {
    e ? () => {
        throw e;
    } : '';
});