let murderer = 'Professor Plum';

const declareMurderer = function() {

    changeMurderer();

    if (murderer === 'Professor Plum') {
        let murderer = 'Mrs. Peacock';
      } else {
          let murderer = 'Mr Green'
      }
    return `The murderer is ${murderer}.`;
}

const changeMurderer = function(){
   return murderer != 'Mrs. White';
}

const verdict = declareMurderer();
console.log(verdict);