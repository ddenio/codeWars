// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
    let new_staff = {}
    Object.assign(new_staff, staff)
    let total = 0;
   for(key in new_staff){
    if(new_staff[key]=='accounts'){
        new_staff[key] = 1
    }else if (new_staff[key]=='finance'){
        new_staff[key] = 2
    }else if (new_staff[key] == 'canteen'){
        new_staff[key] = 10
    }else if (new_staff[key] == 'regulation'){
        new_staff[key] = 3
    }else if (new_staff[key] == 'trading'){
        new_staff[key] = 6
    }else if (new_staff[key] == 'change'){
        new_staff[key] = 6
    }else if (new_staff[key] == 'IS'){
        new_staff[key] = 8
    }else if (new_staff[key] == 'retail'){
        new_staff[key] = 5
    }else if (new_staff[key] == 'cleaning'){
        new_staff[key] = 4
    }else {
        new_staff[key] = 25
    }
   }
   for (const department in new_staff){
    total += new_staff[department]
   }
   return total <=80 ? 'kill me now' : total < 100 ? 'i can handle this' : 'party time!!'
}

console.log(boredom({tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance' }))

console.log(boredom({ tim: 'IS', jim: 'finance',
    randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
    katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
    alex: 'regulation', john: 'accounts', mr: 'canteen' }))

console.log(boredom({ tim: 'accounts', jim: 'accounts',
    randy: 'pissing about', sandy: 'finance', andy: 'change',
    katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
    john: 'retail', mr: 'pissing about' }))

console.log(boredom({ tim: 'accounts', jim: 'accounts',
    randy: 'pissing about', sandy: 'taco', andy: 'change',
    katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
    john: 'retail', mr: 'pissing about' }))