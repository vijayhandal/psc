function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-Web-${b}`;
    
}
document.querySelector("form")
.addEventListener("submit",myFunction);
function myFunction(event){
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let unit = document.getElementById("unit").value;
    let image = document.getElementById("image").value;
    let batch = document.getElementById("batch").value;
    let s1 = new Student(name,course,unit,image,batch);

    let data = JSON.parse(localStorage.getItem("students")) || [];
    
    data.push(s1);

    localStorage.setItem("students",JSON.stringify(data));
}
let x = calculate();
function calculate(){
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let obj = {};

    for(let i=0; i < data.length; i++){
    if(!obj[data[i].batch]){
        obj[data[i].batch] = 1;
    }else{
        obj[data[i].batch]++;
    }
    }
    // for(let i=0; i < data.length; i++){
    //     // if(!obj[data[i].batch]){
    //         obj[data[i].batch]++;
    //     }
    //     // }
    console.log(obj);
}













// console.log("vijay")
// function storeData(event){
//     // e.preventDefault();
//     event.preventDefault();
//     let form = document.getElementById("studentdata");
//     console.log(form);
//     let name = form.name.value;
//     let course = form.course.value;
//     let unit = form.unit.value;
//     let image = form.image.value;
//     let batch = form.batch.value;
//     console.log(name);
//     let s1 = Student(name,course,unit,image,batch);
//     console.log(s1,"done");
// }