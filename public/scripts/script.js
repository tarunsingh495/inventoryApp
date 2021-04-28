const close=document.querySelector("#close");
const open=document.querySelector("#opensvg");

const sidebar=document.querySelector(".sidebar");

function closesidebar(event){
	
	sidebar.classList.toggle("collapse");
}
function opensidebar(event){
	
	sidebar.classList.toggle("collapse");
}
close.addEventListener('click',closesidebar);
open.addEventListener('click',opensidebar);