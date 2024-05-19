let tovarName = document.querySelector("#tovarName");
let tovarPrice = document.querySelector("#tovarPrice");
let category = document.querySelector("#selectCategory");
let btn = document.querySelector("#btn");
let table = document.querySelector("#table");
let spans = document.querySelectorAll(".legend__price");
function addTr() {
    tnValue = tovarName.value
    tpValue = tovarPrice.value
    catValue = category.value;
    let newTr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    td1.textContent = tnValue;
    td2.textContent = tpValue;
    td3.textContent = catValue;
    td4 = document.createElement('button');
    td4.textContent = 'X';
    newTr.appendChild(td1);
    newTr.appendChild(td2);
    newTr.appendChild(td3);
    newTr.appendChild(td4);
    table.appendChild(newTr);
    td4.addEventListener('click',()=>{
        td4.parentElement.remove();
    });
    
}
btn.addEventListener('click',addTr);
