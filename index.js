

//ANS1//
str = 'abcadeecfb';
strArr = str.split('');

for (let i = 0; i < strArr.length - 1; i++) {
	for (let j = i + 1; j < strArr.length; j++) {
		if (strArr[i] == strArr[j]) {
			strArr.splice(j, 1);
			j--;
		}
	}
}
console.log(strArr.join(''));


//ANS2//
function countAlphabets(str) {
    const alphabetCounts = new Map();
  
    for (const char of str) {
      if (/[a-zA-Z]/.test(char)) { // Check if the character is an alphabet
        if (alphabetCounts.has(char)) {
          alphabetCounts.set(char, alphabetCounts.get(char) + 1);
        } else {
          alphabetCounts.set(char, 1);
        }
      }
    }
  
    return alphabetCounts;
  }
  
  const str = "abcadeecfb";
  const counts = countAlphabets(str);
  
  // Print the counts
  counts.forEach((count, alphabet) => {
    console.log(`${alphabet}: ${count}`);
  });