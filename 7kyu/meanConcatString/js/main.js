// You will be given an array which will include both integers and characters.

// Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. 
// Create a single string with the characters and return it as a[1] while maintaining the original order.

// lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
// Here is an example of your return

// [3.6, "udiwstagwo"]

function mean(lst){
    let strArr = "";
    let sum = 0;
    for(let i = 0; i<lst.length;i++){
        if(isNaN(Number(lst[i]))){
            strArr+=lst[i]
        }else{
            sum+=Number(lst[i])
        }
    }return [sum/10, strArr]
}
console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]))
console.log(mean(["0", "u", "a", "y", "0", "a", "9", "q", "3", "v", "g", "7", "6", "4", "y", "d", "8", "6", "0", "d"]))