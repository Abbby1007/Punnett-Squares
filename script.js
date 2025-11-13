const display = document.getElementById("display");
const mg1D = document.getElementById("mg1"); // Mother Gamete 1 display;
const mg2D = document.getElementById("mg2"); // Mother Gamete 2 display;
const fg1D = document.getElementById("fg1"); // Father Gamete 1 display;
const fg2D = document.getElementById("fg2"); // Father Gamete 2 display;
let A1D = document.getElementById("A1"); // Answer 1 display;
let A2D = document.getElementById("A2"); // Answer 2 display;
let A3D = document.getElementById("A3"); // Answer 3 display;
let A4D = document.getElementById("A4"); // Answer 4 display;
let start = document.getElementById.style.visibiliy = "visible";

function monohybird(){
    // start = "hidden";
// mg1 = Mother Gamate 1 and mg2 = Mother Gamete 2
// fg1 = Father Gamete 1 and fg2 = Father Gamete 2
let mg1, mg2, fg1, fg2;

// v1 = value1(mg1) and v2 = value2(mg2)
// v3 = value3(fg1) and v4 = value4(fg2)
let value1, value2, value3, value4;

// l1 = Letter1(mg1) and l2 = Letter2(mg2)
// l3 = Letter3(fg1) and l4 = Letter4(fg2)
let l1, l2, l3,l4;

// G (dominant)- Green petals
// g (recessive) - yellow petals

// Randomly generates the value for each gamete
    mg1 = Math.floor(Math.random() * 2);
    mg2 = Math.floor(Math.random() * 2);
    fg1 = Math.floor(Math.random() * 2);
    fg2 = Math.floor(Math.random() * 2);

    // G = 0; g = 1;

     if(mg1 == 0){
        v1 = 2; // G
        l1 = 'G';
    }
    else{
        v1 = 3;// g
        l1 = 'g';
    }

    if(mg2 == 0){
        v2 = 2; // G
        l2 = 'G';
    }
    else{
        v2 = 3; //g
        l2 = 'g';
    }

   if(fg1 == 0){
        v3 = 2; // G
        l3 = 'G';
    }
    else{
        v3 = 3;// g
        l3 = 'g';
    }

   if(fg2 == 0){
        v4 = 2; // G
        l4 = 'G';
    }
    else{
        v4 = 3;// g
        l4 = 'g';
    }
   display.innerHTML = `Mother: ${l1} ${l2} | Father: ${l3} ${l4}`;

   mg1D.textContent = `${l1}`;
   mg2D.textContent = `${l2}`;
   fg1D.textContent = `${l3}`;
   fg2D.textContent = `${l4}`;
   
   // G value = 2; g value = 3;
    //GG = 4; Gg = 6; gg = 9; 
    A1 = v1*v3;
    A2 = v2*v3 ;
    A3 =  v1*v4;
    A4 =  v2*v4;

// Display for the Answer one section
    if(A1 == 4){
        A1D.innerHTML = `GG`;
    }
    else if(A1 == 6){
        A1D.textContent = `Gg`;
    }
    else if(A1 == 9){
        A1D.textContent = `gg`;
    }
// Display for the Answer two section
        if(A2 == 4){
        A2D.innerHTML = `GG`;
    }
    else if(A2 == 6){
        A2D.textContent = `Gg`;
    }
    else if(A2 == 9){
        A2D.textContent = `gg`;
    }

    // Display for the Answer three section
        if(A3 == 4){
        A3D.innerHTML = `GG`;
    }
    else if(A3 == 6){
        A3D.textContent = `Gg`;
    }
    else if(A3 == 9){
        A3D.textContent = `gg`;
    }

    // Display for the Answer four section
        if(A4 == 4){
        A4D.innerHTML = `GG`;
    }
    else if(A4 == 6){
        A4D.textContent = `Gg`;
    }
    else if(A4 == 9){
        A4D.textContent = `gg`;
    }

}
 

function dihybrid(){
    let pos1;
    let pos2;
    let pos3;
    let pos4;
    let value1;
    let value2;
    let value3;
    let value4;
    let letter1;
    let letter2;
    let letter3;
    let letter4;

    // B = 0;
    // b = 1;
    // T = 0; 
    // t = 1;

    // is pos1 = 0
        // it is B
        //else
            //it is b

      // is pos1 = 0
        // it is B
        //else
            //it is b

           // is pos3 = 0
        // it is T
        //else
            //it is T

              // is pos4 = 0
        // it is T
        //else
            //it is T
    pos1 = Math.floor(Math.random() * 2);
    pos2 = Math.floor(Math.random() * 2);
    pos3 = Math.floor(Math.random() * 2);
    pos4 = Math.floor(Math.random() * 2);

    if(pos1 == 0){
        value1 = 1; // B
        letter1 = 'B';
    }
    else{
        value1 = 3;// b
        letter1 = 'b';
    }

    if(pos2 == 0){
        value2 = 1; // B
        letter2 = 'B';
    }
    else{
        value2 = 3; //b
        letter2 = 'b';
    }

   if(pos3 == 0){
        value3 = 2; // T
        letter3 = 'T';
    }
    else{
        value3 = 4;// t
        letter3 = 't';
    }

   if(pos4 == 0){
        value4 = 2; // T
        letter4 = 'T';
    }
    else{
        value4 = 4;// t
        letter4 = 't';
    }

    display.innerHTML = `${letter1} ${letter2} ${letter3} ${letter4}`;

}