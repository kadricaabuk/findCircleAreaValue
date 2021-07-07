const arguments = process.argv.slice(2);
daireAlanBul = (r) => {
    var alan = Math.PI*Number(r)*Number(r);
    console.log(`yari çap: ${r} alan ${alan.toFixed(2)}`);
}

daireAlanBul(arguments[0]*1)