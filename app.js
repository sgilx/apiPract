fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fb9225d8')
    .then(res => {
        console.log(res.json());
    })
.catch(err => {
    console.log(next(err));
})