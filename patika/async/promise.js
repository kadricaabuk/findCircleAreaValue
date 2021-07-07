const promise1 = new Promise((res, rej) => {
    res('VERİLER ALINDI');
    //rej('BAĞLANTI HATASI');
});

//console.log(promise1);

promise1
    .then(val => {
        console.log(val)
    }).catch(err => {
        console.log(err);
    })