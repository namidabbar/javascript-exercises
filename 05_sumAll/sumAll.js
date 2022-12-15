let interger1=1;
let interger2=4;



const sumAll = function(interger1, interger2) {
    let finalSum=0;
        if (interger1 <0){
            return("ERROR");
        }
        else if (interger2 <0){
            return("ERROR");
        }
        else if (typeof(interger2)==='string'){
            return("ERROR");
        }
        else if (typeof(interger2)==='object'){
            return("ERROR");
        }
        else if(interger1<interger2){
            while (interger1 <= interger2){
            finalSum+=interger1;
            interger1++;
            }
        }
        else if(interger2<interger1){
            while (interger2 <= interger1){
                finalSum+=interger2;
                interger2++;
                }
        }

return(finalSum);
};

// Do not edit below this line
module.exports = sumAll;
