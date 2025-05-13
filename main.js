function getaverage() {
	var grade = Number(document.getElementById('grade').value);

	var grade2 = Number(document.getElementById('rade').value);

	var grade3 = Number(document.getElementById('ade').value);

	var sum = (grade + grade2 + grade3);

	var final = sum/3

	var average = (final).toFixed(2);

	if (average > 94 && average < 100) {
				window.alert ('Your average is ' + average + ' - Excellent')

			}

			else if (average > 87 && average < 93) {
				window.alert ('Your average is ' + average + ' - Satisfactory')
			}

			else if (average > 80 && average < 86) {
				window.alert ('Your average is ' + average + ' - Nice Try')
			}

			else if (average > 75 && average < 79) {
				window.alert ('Your average is ' + average + ' - Needs Improvement')
			}

			else {
				window.alert ('Your average is ' + average + ' - Failure')
			}
}