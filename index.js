
function howMany(sentence) {
    
  return sentence.split(/\s+/).filter(function(x) {
    return /^[A-Za-z]+(?:-[A-Za-z]+)*[.,;:?!]?$/.test(x); 
  }).length;

}
console.log(howMany("jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[1. akf dhj ds 878"))

// Output1: ThiS is my-Test: 1input[ number 1
// Output2: test--index: 2, input: this is test, ? 
// Output3: This-is-my Test !index: ,3 test*
// Output4: test [check] word4 index: 4, test. 
// Output5: This is my--Test! index-five? 5[