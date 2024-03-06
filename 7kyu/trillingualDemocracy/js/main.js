// Trilingual democracy
// Switzerland has four official languages: German, French, Italian, and Romansh.1

// When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules 
// for groups of exactly three3 people:4

// When all three are native speakers of the same language, it also becomes their group's language.5a

// When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

// When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

// The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

// Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8

// Examples:9

// The language for a group of three native French speakers is French: FFF → F

// A group of two native Italian speakers and a Romansh speaker converses in Romansh: IIK → K

// When three people meet whose native languages are German, French, and Romansh, the group language is Italian: DFK → I


function trilingualDemocracy(group) {
    group = group.split('').sort().join('')
    console.log(group)
    switch (group) {
        case 'FFF':
        case 'DDF':
        case 'FII':
        case 'FKK':
        case 'DIK':
            return 'F'
        case 'DDD':
        case 'FIK':
        case 'DFF':
        case 'DII':
        case 'DKK':
            return 'D'
        case 'III':
        case 'DDI':
        case 'FFI':
        case 'IKK':
        case 'DFK':
            return 'I'
        case 'KKK':
        case 'DDK':
        case 'FFK':
        case 'IIK':
        case 'DFI':
            return 'K'    
    }
  }

  console.log(trilingualDemocracy('FFF'))