function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() === 'r'){
        return name + " plays banjo"
    }return name + " does not play banjo"
  }

console.log(areYouPlayingBanjo('Randall'));
console.log(areYouPlayingBanjo('Jimmy'))