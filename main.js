let lis=document.querySelectorAll('ul li')
console.log(lis)
lis.forEach((ele)=> {
    ele.onclick= ()=>{
        lis.forEach(ele=>{
            ele.classList.remove('active')

        })
        ele.classList.add('active')
    }
}) 
let hum=document.querySelector(".app-icon");
let menu1=document.querySelector('nav ul');
hum.addEventListener('click',function(){
    menu1.classList.toggle('showmenu')
    if(EventTarget!=".app-icon"&&EventTarget.parentNode!="nav ul"){
        "nav ul".style.display="none";
    }
});
/*document.querySelectorAll("nav ul li").forEach(n => n.addEventListener('click',()=>{
    menu1.classList.remove('showmenu');
}))*/