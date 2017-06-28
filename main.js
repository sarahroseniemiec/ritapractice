document.addEventListener("DOMContentLoaded", function () {
  console.log("hello")
  var butt = document.getElementById('butt')
  var sentence = document.getElementById('sentence')
  var ritaOutput = document.getElementById('ritaoutput')


  butt.addEventListener("click", function () {
    var userInput = sentence.value
    var ritaString = new RiString(userInput)
    // var words = RiTa.rhymes(userInput)
    // var output = " "
    // for (var i = 0; i < words.length; i++) {
    //   output += words[i]
    //   output += " "
    // }
    // ritaOutput.innerHTML = output
    // var rm = new RiMarkov(3);
    // rm.loadText(theText);
    // var newsentences = rm.generateSentences(10);
    // ritaOutput.innerHTML = newsentences
    //

      randomWord = RiTa.randomWord("nn");
      // console.log(randomWord)
      rm = new RiMarkov(4);

      rm.loadText(userInput);
      // console.log(rm)

      sentences = rm.generateSentences(2);
      console.log(sentences)
      for (var i = 0; i < sentences.length; i++) {
        words = sentences[i].split(" ")
        console.log(words)
        for (var i = 0; i < words.length; i++) {
          rhymeWords = RiTa.rhymes(words[i])
          if (rhymeWords[0] === undefined) {
            console.log(" ")
          } else if (rhymeWords.length > 1){
            console.log(rhymeWords[rhymeWords.length - 1])

          } else {
            console.log(rhymeWords[0])
          }
        }

      }
      // var rhymeSentence = RiTa.rhymes(randomWord)
      // console.log(rhymeSentence[0])
      //   ritaOutput.innerHTML += rhymeSentence[0]

      // for (var i = 0; i < rhymeSentence.length; i++) {
      // ritaOutput.innerHTML += rhymeSentence
      // }

  })




})
