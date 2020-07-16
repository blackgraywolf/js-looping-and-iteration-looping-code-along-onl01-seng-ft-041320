<<<<<<< HEAD
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }


function countDown(count) {
    let i = 0

    while (count >= 0) {
        console.log(count)
        count--
    }
} 
=======
// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGift(gift) {
  # For Ruby or Pythonistas, note that the " is now a ` (back-tick)
  # We'll discuss interpolation in detail elsewhere, but note that
  # JavaScript uses ` like Ruby uses ".
  console.log(`Wrapped ${gift} and added a bow!`);
}
>>>>>>> c5d6d77d794b9cfdd79baeda9eeba7688992c6e5
