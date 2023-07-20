function pomeriMesto(){
	var pokusaj_objekat = localStorage.getItem('pokusaj');
	var pokusaj = JSON.parse(pokusaj_objekat);

	var temp_objekat = localStorage.getItem('temp');
	var temp = JSON.parse(temp_objekat);
  
	switch(pokusaj) {
		 case 0:

			if(temp == 0){
				document.getElementById("w1-1").focus();
				temp++;
				localStorage.setItem('temp', JSON.stringify(temp));
			}
			var inputPolje1 = document.getElementById("w1-1");
			var inputPolje2 = document.getElementById("w1-2");
			var inputPolje3 = document.getElementById("w1-3");
			var inputPolje4 = document.getElementById("w1-4");
			var inputPolje5 = document.getElementById("w1-5");
			
			
			
			
			if (inputPolje1.value !== "" && inputPolje2.value !== "" && inputPolje3.value !== "" && inputPolje4.value !== "" && inputPolje5.value !== "") {
				
				jedna()
				document.getElementById("w2-1").focus();
				
			}	
			break;
		case 1:
			
			var inputPolje1 = document.getElementById("w2-1");
			var inputPolje2 = document.getElementById("w2-2");
			var inputPolje3 = document.getElementById("w2-3");
			var inputPolje4 = document.getElementById("w2-4");
			var inputPolje5 = document.getElementById("w2-5");
			
			if (inputPolje1.value !== "" && inputPolje2.value !== "" && inputPolje3.value !== "" && inputPolje4.value !== "" && inputPolje5.value !== "") {
				
				jedna()
				document.getElementById("w3-1").focus();
				
			}	
				
			break;
		case 2:
			
			var inputPolje1 = document.getElementById("w3-1");
			var inputPolje2 = document.getElementById("w3-2");
			var inputPolje3 = document.getElementById("w3-3");
			var inputPolje4 = document.getElementById("w3-4");
			var inputPolje5 = document.getElementById("w3-5");
			
			if (inputPolje1.value !== "" && inputPolje2.value !== "" && inputPolje3.value !== "" && inputPolje4.value !== "" && inputPolje5.value !== "") {
				
				jedna()
				document.getElementById("w4-1").focus();
				
			}	
				
			break;
		case 3:
			
			var inputPolje1 = document.getElementById("w4-1");
			var inputPolje2 = document.getElementById("w4-2");
			var inputPolje3 = document.getElementById("w4-3");
			var inputPolje4 = document.getElementById("w4-4");
			var inputPolje5 = document.getElementById("w4-5");
			
			if (inputPolje1.value !== "" && inputPolje2.value !== "" && inputPolje3.value !== "" && inputPolje4.value !== "" && inputPolje5.value !== "") {
				
				jedna()
				document.getElementById("w5-1").focus();
				
			}	

			
			break;
		case 4:
			
			var inputPolje1 = document.getElementById("w5-1");
			var inputPolje2 = document.getElementById("w5-2");
			var inputPolje3 = document.getElementById("w5-3");
			var inputPolje4 = document.getElementById("w5-4");
			var inputPolje5 = document.getElementById("w5-5");
			
			if (inputPolje1.value !== "" && inputPolje2.value !== "" && inputPolje3.value !== "" && inputPolje4.value !== "" && inputPolje5.value !== "") {
				
				jedna()
				document.getElementById("w6-1").focus();
				
			}	
			
			break;
		case 5:
			
			var inputPolje1 = document.getElementById("w6-1");
			var inputPolje2 = document.getElementById("w6-2");
			var inputPolje3 = document.getElementById("w6-3");
			var inputPolje4 = document.getElementById("w6-4");
			var inputPolje5 = document.getElementById("w6-5");
			
			if (inputPolje1.value !== "" && inputPolje2.value !== "" && inputPolje3.value !== "" && inputPolje4.value !== "" && inputPolje5.value !== "") {
				
				jedna()
				prikaz()
				
			}	
		
			break;
		default:
	}
	
}



const interval1 = setInterval(pomeriMesto, 50); 

function jedna(){
	
	
	var pokusaj_objekat = localStorage.getItem('pokusaj');
	var pokusaj = JSON.parse(pokusaj_objekat);
	
	
	var poruka = "tacno";

	
	switch(pokusaj) {
		 case 0:
			var c1 = document.getElementById("w1-1").value;
			var c2 = document.getElementById("w1-2").value;
			var c3 = document.getElementById("w1-3").value;
			var c4 = document.getElementById("w1-4").value;

			var c5 = document.getElementById("w1-5").value;
			break;
		case 1:
			var c1 = document.getElementById("w2-1").value;
			var c2 = document.getElementById("w2-2").value;
			var c3 = document.getElementById("w2-3").value;
			var c4 = document.getElementById("w2-4").value;

			var c5 = document.getElementById("w2-5").value;
			break;
		case 2:
			var c1 = document.getElementById("w3-1").value;
			var c2 = document.getElementById("w3-2").value;
			var c3 = document.getElementById("w3-3").value;
			var c4 = document.getElementById("w3-4").value;
	
			var c5 = document.getElementById("w3-5").value;
			break;
		case 3:
			var c1 = document.getElementById("w4-1").value;
			var c2 = document.getElementById("w4-2").value;
			var c3 = document.getElementById("w4-3").value;
			var c4 = document.getElementById("w4-4").value;

			var c5 = document.getElementById("w4-5").value;
			break;
		case 4:
			var c1 = document.getElementById("w5-1").value;
			var c2 = document.getElementById("w5-2").value;
			var c3 = document.getElementById("w5-3").value;
			var c4 = document.getElementById("w5-4").value;

			var c5 = document.getElementById("w5-5").value;
			break;
		case 5:
			var c1 = document.getElementById("w6-1").value;
			var c2 = document.getElementById("w6-2").value;
			var c3 = document.getElementById("w6-3").value;
			var c4 = document.getElementById("w6-4").value;

			var c5 = document.getElementById("w6-5").value;
			break;
		default:
	}

	var string1 = localStorage.getItem('w1');
	var string2 = localStorage.getItem('w2');
	var string3 = localStorage.getItem('w3');
	var string4 = localStorage.getItem('w4');
	var string5 = localStorage.getItem('w5');
	
	var w1 = JSON.parse(string1);
	var w2 = JSON.parse(string2);
	var w3 = JSON.parse(string3);
	var w4 = JSON.parse(string4);
	var w5 = JSON.parse(string5);
	

	var cp1 = 0;
	var cp11 = 0;
	var cp2 = 0;
	var cp22 = 0;
	var cp3 = 0;
	var cp33 = 0;
	var cp4 = 0;
	var cp44 = 0;
	var cp5 = 0;
	var cp55 = 0;
	
	var b1 = 0;
	var b2 = 0;
	var b3 = 0;
	var b4 = 0;
	var b5 = 0;
	
	
	var tacno = 0;
	

		
	
	if (c1 == w1){
	   cp1++;
	   tacno++;
	}
	if (c2 == w2){
	   cp2++;
	   tacno++;
	}
	if (c3 == w3){
	   cp3++;
	   tacno++;
	}
	if (c4 == w4){
	   cp4++;
	   tacno++;
	}
	if (c5 == w5){
	   cp5++;
	   tacno++;
	}
	
	
	if(tacno == 5 ){
		
		prikaz()
	}
	
if(cp1 == 0){

	if(w2 == c1 && cp2==0 && b2 == 0){
        
        	cp11 = 2;
        	b2 = 1;
        }else{

            if(w3 == c1 && cp3==0 && b3 == 0){
               
                cp11 = 2;
                b3 = 1;

            }else{

                if(w4 == c1 && cp4==0 && b4 == 0){
                    
                    cp11 = 2;
                    b4 = 1;

                }else{

			if(w5 == c1 && cp5 ==0 && b5 == 0)
			{
				cp11 = 2;
				b5 = 1;
			}else{
				cp11 = 3;
			}
                }
            }

        }
}



if(cp2 == 0){
    if(w1 == c2 && cp1==0 && b1 == 0){       
        cp22 = 2;
        b1 = 1;
    }else{

        if(w3 == c2 && cp3==0 && b3 == 0){            
            cp22 = 2;
            b3 = 1;
        }else{
            if(w4 == c2 && cp4==0 && b4 == 0){                 
                cp22 = 2;
                b4 = 1;
            }else{                  
                if(w5 == c2 && cp5 ==0 && b5 == 0){
					cp22 = 2;
					b5 = 1;
				}else{
					cp22 = 3;
				}
				}
            }

        }

}


if(cp3 == 0){

	if(w1 == c3 && cp1==0 && b1 == 0){
        
         cp33 = 2;
        b1 = 1;
        }else{

            if(w2 == c3 && cp2==0 && b2 == 0){
               
                 cp33 = 2;
                 b2 = 1;
            }else{

                if(w4 == c3 && cp4==0 && b4 == 0){
                    
                     cp33 = 2;
                    b4 = 1;
                }else{
                   
                     if(w5 == c3 && cp5 ==0 && b5 == 0)
			{
				cp33 = 2;
				b5 = 1;
			}else{
				cp33 = 3;
			}
                }
            }

        }

}


if(cp4 == 0){
	
	if(w1 == c4 && cp1==0 && b1 == 0){
        
        cp44 = 2;
        b1 = 1;
    }else{

		if(w2 == c4 && cp2==0 && b2 == 0){
                
            cp44 = 2;
			b2 = 1;
        }else{

            if(w3 == c4 && cp3==0 && b3 == 0){
                    
                cp44 = 2;
                b3 = 1;
            }else{
                    
				if(w5 == c4 && cp5 ==0 && b5 == 0){
			
					cp44 = 2;
					b5 = 1;
				}else{
					cp44 = 3;
				}
                
            }
        }
	}
}

if(cp5 == 0){
	
	if(w1 == c5 && cp1==0 && b1 == 0){
        
        cp55 = 2;
        b1 = 1;
    }else{

		if(w2 == c5 && cp2==0 && b2 == 0){
                
            cp55 = 2;
			b2 = 1;
        }else{

            if(w3 == c5 && cp3==0 && b3 == 0){
                    
                cp55 = 2;
                b3 = 1;
            }else{
                    
				if(w4 == c5 && cp4 ==0 && b4 == 0){
			
					cp55 = 2;
					b4 = 1;
				}else{
					cp55 = 3;
				}
                
            }
        }
	}
}
	
	
	if(cp1 == 1){
			//zeleno
			switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-1');
					break;
				case 1:
					var input = document.getElementById('w2-1');
					break;
				case 2:
					var input = document.getElementById('w3-1');
					break;
				case 3:
					var input = document.getElementById('w4-1');
					break;
				case 4:
					var input = document.getElementById('w5-1');
					break;
				case 5:
					var input = document.getElementById('w6-1');
				default:
			}
		input.style.backgroundColor = 'green';
    }
    
    if(cp11 == 2){
		//zuto
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-1');
					break;
				case 1:
					var input = document.getElementById('w2-1');
					break;
				case 2:
					var input = document.getElementById('w3-1');
					break;
				case 3:
					var input = document.getElementById('w4-1');
					break;
				case 4:
					var input = document.getElementById('w5-1');
					break;
				case 5:
					var input = document.getElementById('w6-1');
				default:
			}
		input.style.backgroundColor = 'yellow';
    }

     if(cp2 == 1){
		//zeleno
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-2');
					break;
				case 1:
					var input = document.getElementById('w2-2');
					break;
				case 2:
					var input = document.getElementById('w3-2');
					break;
				case 3:
					var input = document.getElementById('w4-2');
					break;
				case 4:
					var input = document.getElementById('w5-2');
					break;
				case 5:
					var input = document.getElementById('w6-2');
				default:
			}
		input.style.backgroundColor = 'green';
       
    }
	
    if(cp22 == 2){
		//zuto
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-2');
					break;
				case 1:
					var input = document.getElementById('w2-2');
					break;
				case 2:
					var input = document.getElementById('w3-2');
					break;
				case 3:
					var input = document.getElementById('w4-2');
					break;
				case 4:
					var input = document.getElementById('w5-2');
					break;
				case 5:
					var input = document.getElementById('w6-2');
				default:
			}
		input.style.backgroundColor = 'yellow';
    }

    if(cp3 == 1){
		//zeleno
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-3');
					break;
				case 1:
					var input = document.getElementById('w2-3');
					break;
				case 2:
					var input = document.getElementById('w3-3');
					break;
				case 3:
					var input = document.getElementById('w4-3');
					break;
				case 4:
					var input = document.getElementById('w5-3');
					break;
				case 5:
					var input = document.getElementById('w6-3');
				default:
			}
		input.style.backgroundColor = 'green';
    }
    if(cp33 == 2){
		//zuto
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-3');
					break;
				case 1:
					var input = document.getElementById('w2-3');
					break;
				case 2:
					var input = document.getElementById('w3-3');
					break;
				case 3:
					var input = document.getElementById('w4-3');
					break;
				case 4:
					var input = document.getElementById('w5-3');
					break;
				case 5:
					var input = document.getElementById('w6-3');
				default:
			}
		input.style.backgroundColor = 'yellow';
    }

    if(cp4 == 1){
		//zeleno
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-4');
					break;
				case 1:
					var input = document.getElementById('w2-4');
					break;
				case 2:
					var input = document.getElementById('w3-4');
					break;
				case 3:
					var input = document.getElementById('w4-4');
					break;
				case 4:
					var input = document.getElementById('w5-4');
					break;
				case 5:
					var input = document.getElementById('w6-4');
				default:
			}
		input.style.backgroundColor = 'green';
    }
	
    if(cp44 == 2){
		//zuto
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-4');
					break;
				case 1:
					var input = document.getElementById('w2-4');
					break;
				case 2:
					var input = document.getElementById('w3-4');
					break;
				case 3:
					var input = document.getElementById('w4-4');
					break;
				case 4:
					var input = document.getElementById('w5-4');
					break;
				case 5:
					var input = document.getElementById('w6-4');
				default:
			}
		input.style.backgroundColor = 'yellow';
    }
	
	if(cp5 == 1){
    	//zeleno
		switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-5');
					break;
				case 1:
					var input = document.getElementById('w2-5');
					break;
				case 2:
					var input = document.getElementById('w3-5');
					break;
				case 3:
					var input = document.getElementById('w4-5');
					break;
				case 4:
					var input = document.getElementById('w5-5');
					break;
				case 5:
					var input = document.getElementById('w6-5');
				default:
			}
		input.style.backgroundColor = 'green';
    }
    
    if(cp55 == 2){
		//zuto
       switch(pokusaj) {
				case 0:
					var input = document.getElementById('w1-5');
					break;
				case 1:
					var input = document.getElementById('w2-5');
					break;
				case 2:
					var input = document.getElementById('w3-5');
					break;
				case 3:
					var input = document.getElementById('w4-5');
					break;
				case 4:
					var input = document.getElementById('w5-5');
					break;
				case 5:
					var input = document.getElementById('w6-5');
				default:
			}
		input.style.backgroundColor = 'yellow';
    }
	
	
	
	
	
	cp1=0;
	cp2=0;
	cp3=0;
	cp4=0;
	cp5=0;
	
	cp11=0;
	cp22=0;
	cp33=0;
	cp44=0;
	cp55=0;
	
	b1=0;
	b2=0;
	b3=0;
	b4=0;
	b5=0;
	
	tacno=0;
	
	pokusaj++;
	localStorage.setItem('pokusaj', JSON.stringify(pokusaj));

}

function myFunction() {
  var w1 = document.getElementById("w1").value;
  var w2 = document.getElementById("w2").value;
  var w3 = document.getElementById("w3").value;
  var w4 = document.getElementById("w4").value;
  var w5 = document.getElementById("w5").value;
  
  localStorage.setItem('w1', JSON.stringify(w1));
  localStorage.setItem('w2', JSON.stringify(w2));
  localStorage.setItem('w3', JSON.stringify(w3));
  localStorage.setItem('w4', JSON.stringify(w4));
  localStorage.setItem('w5', JSON.stringify(w5));
  
	
	var pokusaj = 0;
	localStorage.setItem('pokusaj', JSON.stringify(pokusaj));
	
	var temp = 0;
	localStorage.setItem('temp', JSON.stringify(temp));
	
	
 document.getElementById("w1").value = "";
  document.getElementById("w2").value = "";
  document.getElementById("w3").value = "";
  document.getElementById("w4").value = "";
  document.getElementById("w5").value = "";
  
	window.location.href = "druga.html";
	document.getElementById("w1-1").focus();
			
			
 
}



function prikaz() {
  var myWindow = window.open("", "MsgWindow", "width=200,height=100");
  var string1 = localStorage.getItem('w1');
	var string2 = localStorage.getItem('w2');
	var string3 = localStorage.getItem('w3');
	var string4 = localStorage.getItem('w4');
	var string5 = localStorage.getItem('w5');
	
	var w1 = JSON.parse(string1);
	var w2 = JSON.parse(string2);
	var w3 = JSON.parse(string3);
	var w4 = JSON.parse(string4);
	var w5 = JSON.parse(string5);
	
	var rec;
	rec = w1+w2+w3+w4+w5;
	
  myWindow.document.write("ТАЧНА РЕЧ: " + rec);
}

document.addEventListener("keydown", e =>{
	if(e.key.toLowerCase() === "н" && e.shiftKey){
		
		window.location.href = "pocetna.html";
		
	}
});






document.addEventListener("DOMContentLoaded", () => {
  const hoverButton = document.getElementById("hoverButton");
  const popup = document.getElementById("popup");

  if (hoverButton && popup) {
    hoverButton.addEventListener("mouseover", () => {
      popup.style.display = "block";
    });

    hoverButton.addEventListener("mouseout", () => {
      popup.style.display = "none";
    });
  }
});

