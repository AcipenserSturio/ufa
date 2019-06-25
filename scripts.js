function ipa(sound) {
    var snd = new Audio("mp3\\" + sound + ".mp3");
    snd.play();
}
function converter() {
	// Get our input string from textarea
	var input = document.getElementById("ipa").value;
	//input = input.replace(/\n/g, "<br />"); // Thanks random person on the internet
	
	// Make a char array out of the input
	var ipaArray = input.split('');
	
	// Group the characters into phones
	var phoneArray = ipaToPhones(ipaArray);
	
	// Output the array
	var outputString = "";
	for (var i = 0; i < phoneArray.length; i++) {
		outputString = outputString + phoneArray[i] + " ";
	}
	document.getElementById("ufa").innerHTML = outputString;
}

function ipaToPhones(raw) {
	var phone = [];
	phone[0] = "";
	var k = -1;
	for (var i = 0; i < raw.length; i++) {
		
		var type = charType(raw[i]);
		
		if (type == 2) {
			
			// Append modifier
			phone[k] = phone[k] + raw[i];
			
		} else if (type == 1) {
			
			k++;
			// Insert into a new slot
			phone[k] = raw[i];
			
		} else {
			
			// (type == 0)
			
		}
	}
	return phone;
}

// 0 - undefined. Ignore
// 1 - independent phone
// 2 - modifier - comes after the phone
// 3 - modifier - comes before the phone
// 4 - special
function charType(character) {
	switch (character) {
		// Latin alphabet
		case "a" : return 1;
		case "b" : return 1;
		case "c" : return 1;
		case "d" : return 1;
		case "e" : return 1;
		case "f" : return 1;
		case "g" : return 1;
		case "h" : return 1;
		case "i" : return 1;
		case "j" : return 1;
		case "k" : return 1;
		case "l" : return 1;
		case "m" : return 1;
		case "n" : return 1;
		case "o" : return 1;
		case "p" : return 1;
		case "q" : return 1;
		case "r" : return 1;
		case "s" : return 1;
		case "t" : return 1;
		case "u" : return 1;
		case "v" : return 1;
		case "w" : return 1;
		case "x" : return 1;
		case "y" : return 1;
		case "z" : return 1;
		
		// IPA symbols
		// From the keyboard
		case "ɚ" : return 1;
		case "ɛ" : return 1;
		case "ʔ" : return 1;
		case "ʕ" : return 1;
		case "ɾ" : return 1;
		case "ʀ" : return 1;
		case "ɕ" : return 1;
		case "ħ" : return 1;
		case "ɜ" : return 1;
		case "ɘ" : return 1;
		case "ɯ" : return 1;
		case "ʎ" : return 1;
		case "ʟ" : return 1;
		case "æ" : return 1;
		case "ʍ" : return 1;
		case "ə" : return 1;
		case "ɹ" : return 1;
		case "θ" : return 1;
		case "ʏ" : return 1;
		case "ʊ" : return 1;
		case "ɪ" : return 1;
		case "ɔ" : return 1;
		case "ɸ" : return 1;
		case "ɓ" : return 1;
		case "ɗ" : return 1;
		case "ʄ" : return 1;
		case "ɑ" : return 1;
		case "ʃ" : return 1;
		case "ð" : return 1;
		case "ʌ" : return 1;
		case "ɣ" : return 1;
		case "ɦ" : return 1;
		case "ʝ" : return 1;
		case "ɬ" : return 1;
		case "ɫ" : return 1;
		case "ɠ" : return 1;
		case "ʛ" : return 1;
		case "ʒ" : return 1;
		case "χ" : return 1;
		case "ç" : return 1;
		case "ʋ" : return 1;
		case "β" : return 1;
		case "ŋ" : return 1;
		case "ɱ" : return 1;
		case "ɲ" : return 1;
		case "ɺ" : return 1;
		case "ɝ" : return 1;
		case "œ" : return 1;
		case "ʡ" : return 1;
		case "ʢ" : return 1;
		case "ɽ" : return 1;
		case "ʁ" : return 1;
		case "ʑ" : return 1;
		case "ʜ" : return 1;
		case "ɞ" : return 1;
		case "ɵ" : return 1;
		case "ɰ" : return 1;
		case "ɶ" : return 1;
		case "ɧ" : return 1;
		case "ø" : return 1;
		case "ɻ" : return 1;
		case "ʈ" : return 1;
		case "ɥ" : return 1;
		case "ʉ" : return 1;
		case "ɨ" : return 1;
		case "ɤ" : return 1;
		case "ɒ" : return 1;
		case "ʂ" : return 1;
		case "ɖ" : return 1;
		case "ɐ" : return 1;
		case "ɢ" : return 1;
		case "ɟ" : return 1;
		case "ɮ" : return 1;
		case "ɭ" : return 1;
		case "ʐ" : return 1;
		case "ⱱ" : return 1;
		case "ʙ" : return 1;
		case "ɳ" : return 1;
		case "ɴ" : return 1;
		
		// Not from the keyboard
		case "ǀ" : return 1;
		case "ǁ" : return 1;
		case "ǂ" : return 1;
		case "ǃ" : return 1;
		case "ʘ" : return 1;
		case "ɡ" : return 1;
		/*
		// Modifiers
		case "ː" : return 2; // Length mark
		case "̆" : return 2; // Extra short */
		case "ʰ" : return 2; // Aspirated
		case "ʲ" : return 2; // Palatalised
		case "ʷ" : return 2; // Labialised
		/*case "̚" : return 2; // Not audibly released
		case "̃" : return 2; // Nasalised
		case "̈" : return 2; // Centralised
		case "̩" : return 2; // Syllabic
		case "̯" : return 2; // Non-syllabic
		case "̥" : return 2; // Voiceless
		case "̬" : return 2; // Voiced
		case "̪" : return 2; // Dental
		case "̺" : return 2; // Apical
		case "̝" : return 2; // Raised
		case "̞" : return 2; // Lowered
		case "̟" : return 2; // Advanced (fronted)
		case "̠" : return 2; // Retracted (backed)
		case "ˑ" : return 2; // Half-long
		case "̹" : return 2; // More rounded
		case "̜" : return 2; // Less rounded
		case "̤" : return 2; // Breathy voiced
		case "̰" : return 2; // Creaky voiced
		case "̼" : return 2; // Linguolabial
		case "̘" : return 2; // Advanced tongue root
		case "̙" : return 2; // Retracted tongue root
		case "̻" : return 2; // Laminal
		case "̴" : return 2; // Velarised or pharyngealised
		case "̽" : return 2; // Mid-centralised
		case "ʼ" : return 2; // Ejective
		case "ˤ" : return 2; // Pharyngealised
		case "ˀ" : return 2; // Stød
		case "ᵊ" : return 2; // Syllabic or schwa
		case "ʱ" : return 2; // Breathy voice aspirated
		case "ˡ" : return 2; // Lateral release
		case "ⁿ" : return 2; // Nasal release
		case "ʳ" : return 2; // Optional r
		case "˞" : return 2; // Rhotacised
		case "ᵗ" : return 2; // Optional t
		case "ˠ" : return 2; // Velarised
		case "̏" : return 2; // Extra-low
		case "̀" : return 2; // Low
		case "̄" : return 2; // Mid
		case "́" : return 2; // High
		case "̋" : return 2; // Extra-high
		case "̂" : return 2; // Falling
		case "̌" : return 2; // Rising
		case "᷅" : return 2; // Low rising
		case "᷄" : return 2; // High rising
		case "᷈" : return 2; // Rising-falling
		case "˩" : return 2; // Extra low
		case "˨" : return 2; // Low
		case "˧" : return 2; // Mid
		case "˦" : return 2; // High
		case "˥" : return 2; // Extra high
		case "↓" : return 2; // Downstep
		case "↑" : return 2; // Upstep
		case "↘︎" : return 2; // Global fall
		case "↗︎" : return 2; // Global rise
		case "̊" : return 2; // Voiceless
		*/
		
		default : return 0;
	}
}

class Phone {
	constructor(ipa) {
		this.ipa = ipa;
		this.consonant = checkIfConsonant(ipa);
	}
	
}

function checkIfConsonant(ipa) {
	var vowelArray = ["a", "e", "i", "o", "u", "y", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
	if (containsAtLeastOne(ipa, vowelArray))
}