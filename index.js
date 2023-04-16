function scuberGreetingForFeet(distance){
  let response;
 if (distance < 400){  
 response = 'This one is on me!';
 return response;
 }
 else if (distance >= 400 && distance <= 2000){
  response = 'That will be twenty bucks.';
  return response;
 }
 else if (distance > 2000 && distance <= 2500){
  response = 'I will gladly take your thirty bucks.';
  return response;
 }
 else if (distance > 2500){
  response = 'No can do.';
  return response;
 }
}
function ternaryCheckCity(city){
 return city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }
function switchOnCharmFromTip(tip){
  switch (tip) {
  case 'generous':
    return ('Thank you so much.');
  case 'not as generous':
    return ('Thank you.');
  case 'thanks for everything':
    return ('Bye.');

  }
  
  
  
}