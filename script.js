const registor = document.querySelector(".registor");
const exit = document.querySelector(".exit");
const input = document.querySelector("input");
const input2 = document.querySelector(".contenue_f2");
const input3 = document.querySelector(".contenue_f3");
registor.addEventListener("click",function () {
    document.getElementById("pap").style.display="flex";
    document.getElementById("cont").style.backgroundColor=""

})
exit.addEventListener("click",function () {
    document.getElementById("pap").style.display="none";
    alert("Prénom : "+input.value+" , Nom : "+input2.value+" , Mail : "+input3.value);
})
