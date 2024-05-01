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

function verifyString(string) {
  let currentState = "q0";

  for (let i = 0; i < string.length; i++) {
    char = string[i];
    //console.log(char);
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
        currentState = false;
    }

    if (currentState === false) {
      return currentState;
    }
  }

  return currentState === "q13";
}

const string1 = "let alan49=123;";
const string2 = `let\nalan12jose13=123;`;
const string3 = "let alan= 132;";
const string4 = "let alan =23-76.2+49;";
const string5 = "let alan = 123;";
const string6 = "let alan1 = 123.78"

console.log(verifyString(string1));
console.log(verifyString(string2));
console.log(verifyString(string3));
console.log(verifyString(string4));
console.log(verifyString(string5));
console.log(verifyString(string6));
