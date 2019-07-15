function scuberGreetingForFeet(feet){
  if (feet > 2500)
    {return 'No can do.'}
  else if (feet > 2000)
  {return 'I will gladly take your thirty bucks.'}
  else if (feet <= 400)
    {return 'This one is on me!';}

}

function ternaryCheckCity(city){
  let answer
  (city === "NYC") ? (answer = "Ok, sounds good.") : (answer = "No go.")
  return answer
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    case 'thanks for everything':
    return "Bye."
  }
}
