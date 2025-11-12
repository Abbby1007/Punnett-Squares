const display = document.getElementById("display");
function test(){
display.innerHTML = 'Bye';
}


function monohybird(){
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
        v1 = 1; // G
        l1 = 'G';
    }
    else{
        v1 = 3;// g
        l1 = 'g';
    }

    if(mg2 == 0){
        v2 = 1; // G
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
        v3 = 4;// g
        l3 = 'g';
    }

   if(fg2 == 0){
        v4 = 2; // G
        l4 = 'G';
    }
    else{
        v4 = 4;// g
        l4 = 'g';
    }
   display.innerHTML = `Mother: ${l1} ${l2} | Father: ${l3} ${l4}`;
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