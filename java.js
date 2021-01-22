const ısım=document.getElementById("name");
const soyısım=document.getElementById("Lname");
const kullanici=document.getElementById("user");
const email=document.getElementById("email");
const pasw1=document.getElementById("sıfre1");
const pasw2=document.getElementById("sıfre2");
const button=document.getElementById("gırıs");
var mesaj=document.getElementById("card-form");
var uyarı=document.createElement("div");
var ad,soyad;




  ısım.addEventListener("keyup" , function(){
      ad=ısım.value;
   kullanici.value=("@"+ ad + soyad).toLowerCase();
   });

   soyısım.addEventListener("keyup" , function(){
    soyad=soyısım.value;
 kullanici.value=("@ "+ ad + soyad).toLowerCase();
 });

 button.addEventListener("click", function() {
    
    if(pasw1.value.length>=8){
        if(pasw1.value===pasw2.value){
            uyarı.textContent="HOŞGELDİN  "+ kullanici.value.toLowerCase();
            uyarı.classList="card__basarılı";
            mesaj.appendChild(uyarı);
            button.innerText="DELİVERED"            

        }   
      
        else{
            uyarı.textContent="Parolalar eşit DEĞİL!";
            uyarı.classList="card__basarısız";
            mesaj.appendChild(uyarı);
        }
    }
   
    else {
         uyarı.textContent="Parola Max 8 Karakter Olmalı!";
        uyarı.classList="card__basarısız";
        mesaj.appendChild(uyarı);
    }
     
});