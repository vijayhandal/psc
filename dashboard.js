function append(){
    let data = JSON.parse(localStorage.getItem("students")) || [];
let container = document.getElementById("container");
container.innerHTML = null;

    data.forEach(function(el,index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let p1 = document.createElement("p");
        p1.innerText = "Name: "+el.name;
        let p2 = document.createElement("p");
        p2.innerText ="Course: "+el.course;
        let p3 = document.createElement("p");
        p3.innerText ="Unit: "+el.unit;
        let p4 = document.createElement("p");
        p4.innerText ="Batch: "+el.batch;
        let btn = document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            remove(index);
        });
        div.append(img, p1,p2,p3,p4,btn);
        container.append(div);
    });
    
    
}
append();
function remove(index){
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let newData = data.filter(function (el,i){
        if(i===index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !== index;
        }
        return i != index;
    });
  localStorage.setItem("students",JSON.stringify(newData));
  append();

}