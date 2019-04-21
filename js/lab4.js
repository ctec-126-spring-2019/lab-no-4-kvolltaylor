// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output = '';
    // your code here
    output += '<p>';
    output +='I know you since you were a twenty and I was twenty<br>';
    output += 'But thought that some years from now<br>';
    output += 'A purple little little lady will be perfect<br>';
    output += 'For dirty old and useless clown';
    output += '</p>';

    return output;
}

function verse2(){
    let output = '';
    // your code here
    output += '<p>';
    output += 'I know it all from Diogenis to Foucault<br>';
    output += 'From Lozgechkin to Paspartu<br>';
    output += 'I ja kljanus obostzav dva paltza<br>';
    output += 'Schto muzika poshla ot Zvukov Mu!';
    output += '</p>';

    return output;
}

function verse3(){
    let output = '';
    output +='<p>';
    output += 'So Fio-Fio-Fioletta! Etta! Va-va-va-vaja dama ti moja!<br>';
    output += 'Eh podayte name karetu, votetu, I mi poedem k ebenjam!';
    output += '</p>';

    return output;
}

function chorusFirst(){
    let output = '';
    output += 'Start wearing purple wearing purple<br>';
    output += 'Start wearing purple, for me now<br>';

    return output;
}

function chorusLast(){
    let output = '';
    output += 'All your sanity and wits, they will all vanish<br>';
    output += 'I promise, it\'s just a matter of time';

    return output;
}

function chorus1(){
    let output = '';
    // your code here
    output += '<p>';
    output += chorusFirst();
    output += chorusLast();
    output += '</p>';

    return output;
}

function bridge1(){
    let output = '';
    // your code here
    output += '<p>';
    output += 'So yeah, ';
    output += chorusFirst();
    output += 'So why don\'t you start wearing purple?<br>';
    output += 'Why don\'t you start wearing purple<br>';
    output += 'Start... wearing the purple... for me now!<br>';
    output += '</p>';

    return output;
}

function bridge2(){
    let output='';
    output += '<p>'
    output += chorusLast();
    output += '</p>';

    return output;
}


function main(){
    let finalOutput = ''; // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    finalOutput += `${chorus1()}`;
    finalOutput += `${chorus1()}`;
    finalOutput += `${verse1()}`;
    finalOutput += `${chorus1()}`;
    finalOutput += `${verse2()}`;
    finalOutput += `${chorus1()}`;
    finalOutput += `${bridge1()}`;
    finalOutput += `${bridge2()}`;
    finalOutput += `${verse3()}`;
    finalOutput += `${chorus1()}`;


    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}