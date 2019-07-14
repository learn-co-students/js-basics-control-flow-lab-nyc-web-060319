function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return "This one is on me!"
  } else if (ride >2000 && ride <2500) {
    return "I will gladly take your thirty bucks."
  } if (ride > 2500) {
    return "No can do."
  }
}
function ternaryCheckCity(city){
let response = (city == "NYC") ? "Ok, sounds good." : "No go."
return response
  // switch (city){
  //   case "NYC":
  //     return "Ok, sounds good.";
  //     break;
  //   default:
  //     return "No go."
  //     break;
  // }
}

//Or use ternary operator like so:
// case === "NYC" ? "Ok, sounds good."

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}

