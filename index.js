// For loop 
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names) {
    let thanksMessage = []
  let i=0;
  while (i < names.length){
      thanksMessage.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      i++;
    }
  return thanksMessage;
}
  
//Counting Down  
function countDown(number) {
    while (number>=0){
      console.log(number);
      number--;
    }

}
