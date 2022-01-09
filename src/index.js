module.exports = function toReadable (number) {
    let units = ['', "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let dozens =['', '', "twenty", "thirty", 'forty', "fifty", "sixty", "seventy", "eighty", "ninety"];
    let exceptions = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    if (number == 0){
        return "zero";
    }
    let result = "";
    let n = Array.from(String(number));
    i = n.length;
    if (i == 1){
        result = units[n[i-1]];
    }
    else if (i == 2){
        if(n[0] == 1){
            result = exceptions[n[i-1]];
        }
        else{
            if (n[i-1] == 0){
                result = dozens[n[0]];
            }
            else{
                result = dozens[n[0]] + ' ' + units[n[i-1]];
            }
        }
    }
    else{
        if(n[1] == 1){
            result = `${units[n[0]]} hundred ${exceptions[n[i-1]]}`;
        }
        else {
            if(n[i-1] == 0 && n[i-2] == 0){
                result = `${units[n[0]]} hundred`;
            }
            else if(n[i-1] == 0){
                result = `${units[n[0]]} hundred ${dozens[n[1]]}`;
            }
            else if(n[i-2] == 0){
                result = `${units[n[0]]} hundred ${units[n[i-1]]}`;
            }
            else{
                result = `${units[n[0]]} hundred ${dozens[n[1]]} ${units[n[i-1]]}`;
            }
        }
    }
    return result;
}
