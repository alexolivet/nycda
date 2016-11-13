
	/*** Temporary text filler function. Remove when deploying template. ***/
	var gibberish=["Lorem ipsum dolor sit amet", "Mazim fastidii necessitatibus eos ut, dicunt oblique sea ei, at mel senserit salutatus", "Quas euripidis reprehendunt usu ad"]
	function filltext(words){
		for (var i=0; i<words; i++)
			document.write(gibberish[Math.floor(Math.random()*3)]+" ")
	}
