const Check_btn = document.getElementById('check')
const input = document.getElementById('integer')
const answer = document.getElementById('ans')

Check_btn.addEventListener('click', () => {
	let integer = input.value
	let ans = []

	for (i = 1; i <= integer; i++) {
		ans.push(i)
		if (i % 3 === 0 && i % 5 === 0) {
			ans.pop()
			ans.push('  FizzBuzz  ')
		} else if (i % 3 === 0) {
			ans.pop()
			ans.push(' Fizz ')
		} else if (i % 5 === 0) {
			ans.pop()
			ans.push(' Buzz ')
		}
	}

	console.log(ans)

	console.log(ans, typeof ans)
	console.log(integer)
	return (answer.innerHTML = `Output = [${ans}]`)
})
