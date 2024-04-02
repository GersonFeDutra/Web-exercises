console.log('Hello World!')
var velocity = 60.5

console.log(`Velocity == ${velocity}Km/h`)

if (velocity > 80.0) {
	console.log(`Over limits`);
}

var now = new Date()
var week_day = now.getDay()
var message = 'Current week day: '

console.log(`Hours now: ${now.getHours()}h`)
// switch (week_day) {
// 	case 0:
// 		message += 'Sunday'
// 		break;
// 	case 1:
// 		message += 'Monday'
// 		break;
// 	case 2:
// 		message += 'Tuesday'
// 		break;
// 	case 3:
// 		message += 'Wednesday'
// 		break;
// 	case 4:
// 		message += 'Thursday'
// 		break;
// 	case 5:
// 		message += 'Friday'
// 		break;
// 	case 6:
// 		message += 'Saturday'
// 		break;
// }
// console.log(message);
console.log(`${message}${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
	'Friday', 'Saturday'][week_day]}`);
