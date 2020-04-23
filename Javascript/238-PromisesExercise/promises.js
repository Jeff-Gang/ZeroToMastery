// const promise = new Promise ((resolve, reject) => {
//     if (true) {
//         resolve('success');
//     } else {
//         reject('error-yo');
//     }
// })

// 1)
const promise2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 4000, 'Success');
})


// 2)
const promise2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 4000, 'Success');
    promise2.then(console.log);
})

// 3)
// WRONG:
// Promise.resolve('Success', 4000).then(function(value) {
//     console.log(value);
//   }
//   );

//Right:
const promise = Promise.resolve(
    setTimeout(() => {
      console.log("success");
    }, 4000)


  // 5)

  const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]

  Promise.all(urls.map(url => {
      return fetch(url).then(people=> people.json())
  })).then(results => {
      console.log(results[0])
      console.log(results[1])
      console.log(results[2])
      console.log(results[3])
  }).catch(() => console.log('error!'))

  // #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it? -- yes