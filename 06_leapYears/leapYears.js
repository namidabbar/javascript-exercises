let Year=2022;
const leapYears = function(Year) {

    if(Year%4==0 && Year%400==0){ 
        return(Boolean(Year%4==0 && Year%400==0));
    }



    else if(Year%4==0 && Year/400!=0){
        return(Boolean(Year%4==0 && Year/400==0));    
    }



    else if(Year%4==0 && Year%100!=0){
        return(Boolean(Year%4==0 && Year%100!=0));    
    }


    
    else if(Year%4!=0){
        return(Boolean(Year%4==0));
    }


};

// Do not edit below this line
module.exports = leapYears;
