
const string= 'hey'
const num= 0


function repeatString(string, num) {
    if(num<0){
        return('ERROR');
    }
    else{
    let returnString='';

    let i=1; 
    while (i<=num) {
        returnString += string;
        i++;
    }
    return(returnString);
    }

};

// Do not edit below this line
module.exports = repeatString;
