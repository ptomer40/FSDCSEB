// console.log("Welcome to JS");
// const a=12;
// console.log(a);
// if(a>10){
//    let b=23;
//    a=40;
//     console.log("a inside condtion:"+a);
// }
// console.log("b outside condition:"+b);

// console.log(typeof b);
// let today=Date();
// console.log(today);

// let a=12;
// let b="12";
// if(a===b){
//     console.log("Welcome");
// }
// else{
//     console.log("Hello");
// }
// let myname="Amit";
// let college="ABES EC";
// let result=`Hi, my name is ${myname} and I m doing engineering from ${college}`;
// console.log(result);

// Objects in JS
//let key="sname"
// const students=[
//     {
// sname:"Amit",
// course:"B.Tech",
// college:"ABES EC"
// },
// {
//     sname:"Ram",
//     course:"MCA",
//     college:"ABES EC"    
// }


// ]

// console.log(students[1]);
// console.log("Name:"+students.sname+"  Course:"+students.course);
// const {sname}=students;
// console.log(sname);
// students[key]="Rahul";
// console.log(students);


//function
// function greeting(msg="Welcome"){
//     console.log("Good Morning "+msg);
// }
// greeting("Greetings");

// function sum(a,b,c=23){
//     return a+b+c;
// }

// let data=sum(12,20);
// console.log(data);
// CallBack Function



// function selectLanguage(language){
//     let data;
//     if(language=="c"){
//     function cCompiler(){
//         return "CCompiler Selected";
//         }
//         data=cCompiler();
//     }
//     if(language=="java"){
//         function javaCompiler(){
//         return "Java Compiler Selected";
//         }
//         data=javaCompiler();
//     }
//     return data;
// }

// let data1= selectLanguage("c");
// console.log(data1);

// console.log("Hello World");
// const div=document.getElementsByClassName("parent");
// console.log(div);
//div[0].innerText="Hello JS";
//div[0].innerHTML="<h2 style=color:red>Hello JS</h2>";
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES Engineering College";
// console.log(h1);
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// h1.style.padding="20px";
// h1.style.marginLeft="300px";
// div[0].appendChild(h1);

// const img=document.createElement("img");
// img.src="./cat3.png";
// console.log(img);
// img.setAttribute("height","300");
// img.setAttribute("width","300");
// div[0].appendChild(img);
// div[0].removeChild(img);

// function getData(){
//     console.log("Hi, inside getData function");
//     div[0].innerHTML="<h2 style=color:red>Hello, Event handled</h2>";
// }


// const button=document.getElementsByClassName("btn");
// console.log(button);
// // button[0].addEventListener("click",getData);

// const promise=new Promise((resolve,reject)=>{
//       let a=5;
//       if(a>10){
//         resolve("Accepted");
//       }
//       else{
//         reject("Not Accepted");
//       }


// })

// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("All resources have closed"));

// const promise2=new Promise((resolve,reject)=>{

//     resolve({name:"Prashant Tomer",Stack:"MERN Stack"});
// });
// promise2.then((data)=>{console.log("Hi,"+data.name)})
// .catch(x=>{console.log(x)})

const response=fetch("https://dummyjson.com/products");
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res);
    })
})