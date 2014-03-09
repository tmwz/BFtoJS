//Brainfuck to JS translator
//Copyright © Andrey Viktorov, 2014
//MIT Licensed

function translate(bf) {
    var js = "var c = new Array(30000);var i = 0;for(a = 0; a<29999; a++){c[a] = 0;}var output = \"\";";

    for(i = 0; i<bf.length-1; i++){
        js += getJsByBf(bf.charAt(i));
    }

    js += "alert('Output: ' + output);";
    
    return js;
}

function getJsByBf(char) {
    if(char=='>') {
        return "i++;"
    } else if (char=='<') {
        return "i--;"
    } else if (char=='+') {
        return "c[i]++;";
    } else if (char=='-') {
        return "c[i]--;";
    } else if (char=='.') {
        return "output+=String.fromCharCode(c[i]);";
    } else if (char==',') {
        return "c[i]=prompt('Input one symbol',0).charAt(0);";
    } else if (char=='[') {
        return "while(c[i]){";
    } else if (char==']') {
        return "}";
    }
}
