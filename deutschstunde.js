// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

// (This Kata is a joke, there is no such grammar rule!)



function derDieDas(wort){
  
  const lowerWort = wort.toLowerCase()
 
  let counter = 0
  
  for (let i = 0; i < lowerWort.length; i++) {
    const char = lowerWort[i]
   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || 
       char === "ä" || char === "ö" || char === "ü" ) 
   {
     counter++
   }
 }
  
  if (counter < 2) {
    return "das " + wort
  } else if (counter <= 3) {
    return "die " + wort
  } else {
    return "der " + wort
  }


}
