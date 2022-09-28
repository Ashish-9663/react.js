// const btn = document.getElementById("main_btn");
// btn.addEventListener("click", _=>{
//     const pr = fetch("https://reqres.in/api/users");
//     pr.then(response => {
//         //console.log(response);
// //response.json();
// //response.text();
//         // const rp_json= response.json();
//         // rp_json.then(data => {
//         //     console.log(data);
//         // })

//         const rp_text= response.text();
//         rp_text.then(data => {
//             console.log(data);
//             const o=JSON.parse(data);
//         console.log(o);
//         })

        
//     })
// })

const btn = document.getElementById("main_btn");
btn.addEventListener("click",_=>{
    fetch("https://reqres.in/api/users")
    .then(r =>r.json())
    .then(data => console.log(data),fetch("https://reqres.in/api/users")
    .then(a =>a.json())
    .then(data =>{console.log(data)}))
})