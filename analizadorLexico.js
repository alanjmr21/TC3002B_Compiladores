/*
states q0, q1, and q2 check that the keyword "let" exists 
in the declaration of a variable
*/
function q0(char) {
  if (char === "l") {
    return "q1";
  }

  return false;
}

function q1(char) {
  if (char === "e") {
    return "q2";
  }

  return false;
}

function q2(char) {
  if (char === "t") {
    return "q3";
  }

  return false;
}

/*
state q3 checks that there's a space or jump line after the "let"
keyword
*/
function q3(char) {
  if (char === " " || char === "\n") {
    return "q4";
  }
}

/*
State q4 checks if a variable starts with a letter [a-z, A-Z]
*/
function q4(char) {
  if (/[a-zA-Z]/.test(char)) {
    return "q5";
  } else if (char === " " || char === "\n") {
    return "q4";
  }
}

/*
Keep inside state q5 to continue checking alphanumeric characters
in variable, else change states
*/
function q5(char) {
  if (/[a-zA-Z]/.test(char) || /\d/.test(char)) {
    return "q5";
    // check if there's a space after variable name (this may be on the string)
  } else if (char === " ") {
    return "q6";
  } else if (char === "=") return "q7";
}

function q6(char) {
  if (char === "=") {
    return "q7";
  } else if (char === " ") {
    return "q6";
  }
}

function q7(char) {
  // check if there's a space after "=" symbol (this may be on the string)
  if (char === " ") {
    return "q8";
  } else if (/\d/.test(char)) {
    return "q9";
  }
}

function q8(char) {
  if (/\d/.test(char)) {
    return "q9";
  } else if (char === " ") {
    return "q8";
  }
}

function q9(char) {
  if (/\d/.test(char)) {
    return "q9";
  } else if (char === ".") {
    return "q10";
  } else if (char === "+" || char === "-" || char === "/" || char === "*") {
    return "q12";
  } else if (char === ";") {
    return "q13";
  }
}

function q10(char) {
  if (/\d/.test(char)) {
    return "q11";
  }
}

function q11(char) {
  if (/\d/.test(char)) {
    return "q11";
  } else if (char === "+" || char === "-" || char === "/" || char === "*") {
    return "q12";
  } else if (char === ";") {
    return "q13";
  }
}

function q12(char) {
  if (/\d/.test(char)) {
    return "q9";
  }
}

function splitWithSemicolons(str) {
  const regex = /([^;]+);?/g; // Regular expression 
  return str.match(regex);
}

function verifyString(string) {
  // split strings into a list with regex
  const stringsList = splitWithSemicolons(string)
  
  stringsList.map((string) => {
    let currentState = "q0";
    console.log(string)

    for (let i = 0; i < string.length; i++) {
      char = string[i];
  
      switch (currentState) {
        case "q0":
          currentState = q0(char);
          break;
        case "q1":
          currentState = q1(char);
          break;
        case "q2":
          currentState = q2(char);
          break;
        case "q3":
          currentState = q3(char);
          break;
        case "q4":
          currentState = q4(char);
          break;
        case "q5":
          currentState = q5(char);
          break;
        case "q6":
          currentState = q6(char);
          break;
        case "q7":
          currentState = q7(char);
          break;
        case "q8":
          currentState = q8(char);
          break;
        case "q9":
          currentState = q9(char);
          break;
        case "q10":
          currentState = q10(char);
          break;
        case "q11":
          currentState = q11(char);
          break;
        case "q12":
          currentState = q12(char);
          break;
        default:
          currentState = false
      }
    }
    console.log(currentState === "q13")
  })
}

const string = `let v1 = 12;let v1 = 12;let      variable2= 32.78;let variable3 = 21.3*30.12/4*6;let\n\nvariable4 = 234.67;let variable 5 = 3;let alan = 4;let     alan234 =34*234-4.67/10;`;

verifyString(string)
