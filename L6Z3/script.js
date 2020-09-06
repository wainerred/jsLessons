
var current=1;
var quantity=3; 
 

tumb= [];
tumb[0]=new Image();   
tumb[1]=new Image();   
tumb[2]=new Image();   

 

tumb[0].src="img/1.jpg"
tumb[1].src="img/2.jpg"
tumb[2].src="img/3.jpg"

 
    function frw(){
        if (current < quantity) {
            current++;
        document.images['r'].src=tumb[current-1].src;
        }
    }
    function bck(){
        if (current > 1) {
            current--;
        document.images['r'].src=tumb[current-1].src;
        }
    }