function scuberGreetingForFeet(numValue){
  // Write your code here!
  if (numValue > 2500){
    return 'No can do.';
  }else if (numValue > 2000){
    return 'I will gladly take your thirty bucks.';
  }else {
    return "This one is on me!";
  }
  
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city === "NYC"){
    return "Ok, sounds good.";
  }
  return "No go."
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous'){
    return 'Thank you so much.';
  }else if (tip === 'not as generous'){
    return 'Thank you.';
  }else {
    return "Bye.";
  }
}