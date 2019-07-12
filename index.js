function scuberGreetingForFeet(distance){
  if (distance < 400)
    return 'This one is on me!';
  if (distance >2500)
      return  'No can do.';
  if (distance > 2000)
    return "I will gladly take your thirty bucks.";

  // Write your code here!
}

function ternaryCheckCity(c){
  let o;

  (c == "NYC") ? o='Ok, sounds good.' : o='No go.';

  return o;
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let return_val;
  switch(tip){
    case "generous":
        return_val= 'Thank you so much.'
        break;
    case "not as generous":
        return_val = "Thank you."
        break;
    default:
        return_val = "Bye."
  }
  return return_val
  // Write your code here!
}