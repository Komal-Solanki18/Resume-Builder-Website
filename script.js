function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter here")
    let weOb = document.getElementById("we");

    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter here")
    let aqOb = document.getElementById("aq");

    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function addNewPSField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('psField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter here")
    let psOb = document.getElementById("ps");

    let psAddButtonOb=document.getElementById("psAddButton");
    psOb.insertBefore(newNode, psAddButtonOb);
}
//generating cv
function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("igT").innerHTML = document.getElementById("igField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;


    let wes = document.getElementsByClassName("weField");

    let str="";

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    
    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("eqField");
    let str1="";
    for(let e of aqs)
    {
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let pss = document.getElementsByClassName("psField");

    let str2="";

    for(let e of pss)
    {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    
    document.getElementById("psT").innerHTML = str2;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block"

}

function printCV()
{
    window.print();
}