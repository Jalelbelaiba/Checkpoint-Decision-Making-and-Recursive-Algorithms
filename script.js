function getMovieTicketPrice() {
    
    let age = prompt("Please enter your age:");

    age = Number(age);

    let ticketPrice;

    if (age <= 12) {
        ticketPrice = 10; 
    } else if (age <= 17) {
        ticketPrice = 15; 
    } else if (age >= 18) {
        ticketPrice = 20; 
    } else {
        console.log("Invalid age entered.");
        return; 
    }

    
    console.log(`The ticket price for your age (${age}) is $${ticketPrice}.`);
}


getMovieTicketPrice();



function LeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}


/////////////////////////////


function isPalindrome(str) {
   
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

if (str.length <= 1) {
        return true;
    }

if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}



function power(base, exponent) {
  
    if (exponent === 0) {
        return 1;
    }


    return base * power(base, exponent - 1);
}
