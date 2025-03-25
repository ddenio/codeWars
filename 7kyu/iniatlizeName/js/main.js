// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name){
    const nameArr = name.split(' ')
    let arrMid = name.split(' ').slice(1,-1)
    if (nameArr.length <= 2){
        return name
    }return `${nameArr[0]} ${arrMid.map(e => e[0]+'.').join(' ')} ${nameArr[nameArr.length-1]}`
}

console.log(initializeNames("Lois Betty Catherine Davis"))