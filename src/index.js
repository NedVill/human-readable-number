module.exports = function toReadable(number) {

	if (number == 0) {
		return 'zero'
	}

	hrn = {
		1 : ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
		2 : {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16:'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'},
		3 : {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'},
		4 : 'hundred',
	}

	let numStr = `${number}`,
		wordsArr = [];

	for (let i = numStr.length - 1; i >= 0; i--) {
		switch(i) {
			case (numStr.length - 1):

				if (numStr[i - 1] >= 2 && numStr[i - 1] !== undefined) {
					hrn[1][numStr[i]] !== '' ? wordsArr.push(hrn[1][numStr[i]]) : '';
					wordsArr.push(hrn[3][numStr[i - 1]])
					i -= 1;
					continue
				}
		
				if (numStr[i - 1] < 2 && numStr[i - 1] >= 1 && numStr[i - 1] !== undefined) {
					wordsArr.push(hrn[2][`${numStr[i - 1]}${numStr[i]}`])
					i -= 1;
					continue
				}

			break;

			case (0):
				wordsArr.push(hrn[4])
				wordsArr.push(hrn[1][numStr[i]])
				continue
		}

		hrn[1][numStr[i]] !== '' ? wordsArr.push(hrn[1][numStr[i]]) : '';
	}

	return wordsArr.reverse().join(' ');
}