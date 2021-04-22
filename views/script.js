const close=document.querySelector("#close");
const open=document.querySelector("#opensvg");
console.log(open);
const sidebar=document.querySelector(".sidebar");

function closesidebar(event){
	
	sidebar.classList.add("collapse");
}
function opensidebar(event){
	
	console.log("clicked");
}
close.addEventListener('click',closesidebar);
open.addEventListener('click',opensidebar);