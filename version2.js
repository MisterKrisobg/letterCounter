const countLetters = (input) => {
    // Counter
    let x = 0;
    // RegExp pattern
    let pattern = /[a-z]/i
    
    // Iterates through the characters of the input
    for (let ch of input) {
      // Checks if the current character matches any letter from the pattern and adds 1 to the counter if it does
      if (pattern.test(ch)) {
            x++;
        }
    }
    // Prints the number of letters in the input which belong to the Latin alphabet.
    console.log(x) 
    }

countLetters("H%ey th3r9.");
//Expected output: 6
