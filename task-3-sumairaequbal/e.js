let icon = document.querySelector(".icon");
let a = document.querySelector(".nav1 ");

// login

let con1 = document.querySelector("#con");
let contact1 = document.querySelector("#contact");
let container1 = document.querySelector(".main");



con1.addEventListener("click",()=>{
  if(contact1.style.display==='none'){
contact1.style.display='block';
container1.style.display='none';

  }
   else{
    contact1.style.display='none';
    container1.style.display='block';
   }   

 
    });













// submit
 let popup1 =  document.querySelector("#popup");
 function openpopup(){
     popup1.classList.add("open-popup");

}

 function closepopup(){
    popup1.classList.remove("open-popup");

 }







var automatic = new Typed (".web",{
    strings :["our","Gift","shop"],
    typeSpeed : 150,
    backSpeed :150,
    loop: true,
});


icon.addEventListener("click",()=>{
    a.classList.toggle("showdata");
    
    if(a.className=="showdata"){
        
        document.querySelector("#bar").className= "fa-solid fa-xmark fa-spin";
    }
else{
    document.querySelector("#bar").className= " fa-solid fa-bars fa-flip";

}

 
    })

    // faq/

    const showFAQButton = document.getElementById('show-faq-button');
    const faqSection = document.getElementById('faq-section');
    
    showFAQButton.addEventListener('click', () => {
        if (faqSection.style.display === 'none') {
            faqSection.style.display = 'block';
            showFAQButton.innerText = 'Hide FAQ';
        } else {
            faqSection.style.display = 'none';
            showFAQButton.innerText = 'Show FAQ';
        }
    });
    
// card 
let card = document.querySelectorAll(".crd");
let itempage1 = document.querySelector(".itempage");
let container = document.querySelector(".main");
let itemimg1 = document.querySelector(".itemimg");
let cusreview1 = document.querySelector(".cusreview");
let buybtn1 = document.querySelector("#buybtn");
let text1 = document.querySelector(".buytext");
let foot1 = document.querySelector(".foot");
let imgSrc ="";
let itemindex =0;


card.forEach(function(curValue,index){

curValue.addEventListener("click",function(){
itempage1.style.display='flex';
// foot1.style.display='flex';
cusreview1.style.display='block';
container.style.display='none';

let imgSrc = curValue.querySelector("img").src ;
itemimg1.querySelector("img").src=imgSrc;
});

});
// let text1 = document.querySelector(".buytext");
buybtn1.addEventListener("click",function(){
    document.querySelector(".buypage").style.display="block";
    text1.innerHTML=`
    
    <h3>Enter details:</h3>
    <input type="text" placeholder="Enter your name" id="name">
    <input type="address" placeholder="Enter your address">
    <input type="email" placeholder="Enter your email">
    <input type="text" placeholder="Enter your Number">


    <h3>Payment options:</h3>
    <select>
        <option value="Goggle-pay"> Goggle-pay </option>
        <option value="Phone-pay"> Phone-pay </option>
        <option value="Bharat-Pay"> Patm </option>
        <option value="Cash on delivery"> Goggle-pay </option>

    </select>
  

    `



let cross1 = document.querySelector(".cross");
cross1.addEventListener("click",function(){
console.log("khatam tata bye bye");
document.querySelector(".buypage").style.display="none";


});



})




// item js

let close1 = document.querySelector("#close");
let open1 = document.querySelector("#open");
var buy1 = document.querySelector("#buy");
var pur1 = document.querySelector("#purchase");
let exchange = document.querySelector("#exe");
let return1 = document.querySelector("#return");
let buynow1 =document.querySelector("#buynow");
let review1 =document.querySelector("#review");
let app1 = document.querySelector("#app");
let ask1 = document.querySelector("#ask");





function showQuestion() {
    document.getElementById('ques').style.display = 'block';
    document.getElementById('app').style.display = 'none';
  }

  function showReview() {
    document.getElementById('app').style.display = 'block';
    document.getElementById('ques').style.display = 'none';
  }









open1.addEventListener("click",()=>{
    if(close1.style.display==='none'){
        close1.style.display='block';
    }           
    else{
        close1.style.display='none';

    }
});


return1.addEventListener("click",()=>{
    if(exchange.style.display==='none'){
        exchange.style.display='block';
    }
    else{
        exchange.style.display='none';

    }
});





pur1.addEventListener("click",()=>{
    if(buy1.style.display==='none'){
        buy1.style.display='block';
    }
    else{
        buy1.style.display='none';

    }
});

// cart 
