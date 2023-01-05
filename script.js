var slayt= document.getElementsByClassName("slayt");
var slaytsayısı = slayt.length; //slayt.length ile slayt sayısını buluyoruz istersek "alaert" ile ekrana yazdırabiliriz.
var slaytno=0;

slaytgöster(slaytno); //slaytın numarasını ayarlamak için

function sonrakiSlayt() {
    slaytno++;
    slaytgöster(slaytno);
  }                             //önceki ve sonraki butonlarının oluşturan koddur

  function oncekiSlayt() {
    slaytno--;
    slaytgöster(slaytno);
  }


var s =  setInterval(function() {
	   
    slaytno++;   //slaytno'yu her üç saniyede bir arttırır
    
    slaytgöster(slaytno);
    
},3000);

function slaytgöster(slaytnumarası) {
    slaytno= slaytnumarası;
    if(slaytnumarası >= slaytsayısı) {  //slayt numarası slayt sayısına eşit ya da büyük olduğunda slayt başa dönsün diye slaytno 0'a eşitlendi.
        slaytno=0;
    }
    if (slaytnumarası < 0) {      //slayt numarası 0'dan küçükse son slayta geçmesini sağlıyor.
        slaytno=slaytsayısı-1;
    }
    
   for(i=0; i<slaytsayısı; i++) {      //i toplam slayt sayısından küçükse toplam slayt sayısına gelene kadar i'yi bir arttırmayı sağlıyor.
       slayt[i].style.display="none";  //slaytları gizler
   }

   slayt[slaytno].style.display="block"; //ilk slaytı gösterir
}


          
          
