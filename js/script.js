//variables

var space ="&nbsp"
var res = "*"
var br ="<br />"



///x=y

var x = 5;
var y = 6;

x=x+y;
y=x-y;
x=x-y;




///cube

function cube(){
var res = "*";
var space = "&nbsp";
var br = "<br />";

for(var v = 0; v < 20; v++){
    document.write(br+res);

    for(var b = 0 ; b < 40; b++){
        document.write(res)
        
     
    }
}
}



////cubeMinus

function cubeMinus (){

var m=10;

for (var d = 1; d <= m;  d++){
    document.write(br);
    for(var p = 1;  p <= m ; p++){
        if(d === 1 || p === 1 || p >= m ||d >= m ){
            document.write(res)
        }else{
            document.write(space+space)
        }


        document.write(space+space)
    }
}
}



///numtriangle

function numtriangle(){

var r, f;

for(r=1;r<=10;r++){

    for(f=1;f<=r;f++){
        document.write(f+space+space)
    }
    document.write(br)
}
}







/// tria




function tria(){

for(var o = 0; o<=20; o++){




    for (var u = 0; u<=(20-o); u++)
    {
        document.write(space+space);


    }


    for(var z = 0; z <o ; z++)
    {


        document.write(res);
    
    }
    

    document.write(br)

}

}





///triangle



function triangle(){
  
var count = 10;
var symbol = '';
var result = '';
for (var i = 1; i < count; i++) {
   var space = '';
   for (var j = 0; j < count - i; j++) {
      space += '&nbsp;';
   }
   if(i % 2 === 0){
      result += space + symbol + symbol + '<br />';
   }else{
      result += space + symbol + '#' + symbol + '<br />';
      symbol += '*';
   }
}
}






///triangleUp

function triangleUp(){


for(var o = 0; o<=20; o++){




    for (var u = 0; u<=(20-o); u++)
    {
        document.write(space);


    }


    for(var z = 0; z <o ; z++)
    {


        document.write(res);
    
    }

    document.write(br)

}
}





///triangleDown

function triangleDown (){

for(var l=0;l<=20;l++){


    document.write(space)

    for(var g =0; g<=20-l ; g++){
        document.write(res+space)
    }

    for(var e = 0; e<=l; e++){
       
      
    }

    document.write(br)
}

}





//squares


function square(){
var res = "*";
var space = "&nbsp";
var br = "<br />";
var n=20;

for(var i=1;i<=n; i++){
    for(var k=1;k<=(n-i);k++){
        document.write(space+space)
    }
    for(var j=1;j<=i;j++){
        document.write(res)
    }
    for(j=2;j<=i;j++){
        document.write(res)
    }
    document.write(br)
}
for(i=n-1;i>=1; i--){
    for(k=1;k<=(n-i);k++){
        document.write(space+space)
    }
    for(j=1;j<=i;j++){
        document.write(res)
    }
    for(j=2;j<=i;j++){
        document.write(res)
    }
    document.write(br)
}

}

