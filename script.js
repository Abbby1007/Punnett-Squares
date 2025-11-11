const display = document.getElementById("display");
function test(){
display.innerHTML = 'Bye';
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