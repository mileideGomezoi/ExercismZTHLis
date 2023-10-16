
export function hey(message: string): string {

  message = message.trimEnd();
  
  const QUESTION : string = "question";
  const YELL : string = "yell";
  const CAPS_AND_QUESTION : string = "capsAndQuestion";
  const SILENCE : string = "";

  const regexNoLetters = /^[^a-zA-Z]*$/;

  let typeOfResponse : string = "other";

  let lastChar = message[message.length - 1];

  let isUpperCase = false;

  if(message === message.toUpperCase() && !regexNoLetters.test(message))
    isUpperCase = true;

  if(isUpperCase) typeOfResponse = YELL;

  if(message.length === 0) typeOfResponse = SILENCE;

  if(lastChar === "?") typeOfResponse = 
    isUpperCase ? CAPS_AND_QUESTION : QUESTION;

  switch(typeOfResponse){
    case YELL:
      return "Whoa, chill out!"
      break;
    case QUESTION:
      return "Sure.";
    case CAPS_AND_QUESTION:
      return "Calm down, I know what I'm doing!"
      break;
    case SILENCE:
      return "Fine. Be that way!"
      break;
  }

  return "Whatever."

}
