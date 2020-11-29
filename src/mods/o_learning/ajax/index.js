


// const gethttp = resource => {
//   return new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//       (request.readyState === 4 && request.status === 200)
//       ? resolve(  JSON.parse(request.responseText)  ) 
//       : request.readyState === 4 ? reject('error') : null 
//     })
//     request.open('GET', resource)
//     request.send()

//   })

// }

// // const gethttp2 = (resource,callback) =>{

// //   gethttp(resource).then( (data)=>{
// //       callback(data)
// //     })
// //     .catch( err => console.log(err) )
// // }


// // gethttp2("https://jsonplaceholder.typicode.com/todos/1", (data)=>{
// //   document.querySelector("body").innerHTML += data.title
// // })

// gethttp("https://jsonplaceholder.typicode.com/todos/1")
//   .then( (data)=>{
//   document.querySelector("body").innerHTML += data.title;
//   return gethttp('https://jsonplaceholder.typicode.com/todos/2')
// })
//   .then((data)=>{
//   document.querySelector("body").innerHTML += ` ${data.title}`;
//   return gethttp('https://jsonplaceholder.typicode.com/todos/3')
// })
//   .then((data)=>{
//   document.querySelector("body").innerHTML += ` ${data.title}`;
// })
//   .catch( err => console.log(err) )

// fetch('https://jsonplaceholder.typicode.com/todos/3')
//   .then((resp)=>{
//     // console.log(JSON.parse(resp))
//     return resp.json()
//   })
//   .then(data=>{
//     console.log(data.title)
//   })
//   .catch((err)=>{console.log(err)})

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
  const data = await response.json();
  return data
}
console.log(getTodos()
  .then(data=>{console.log(data)}))

  
console.log('hi')