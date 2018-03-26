const fs = require('fs')
const util = require('util')

// 正常写法
// fs.readFile('../../package.json', (err, data) => {
// 	if (err) {
// 		return console.log(err)
// 	}
// 	data = JSON.parse(data)
// 	console.log(data.name)
// })


// Promise 写法
// function readFileAsync(path) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, (err, data) => {
// 			if (err) reject(err)
// 			else resolve(data)
// 		})

// 	})
// }

// readFileAsync('../../package.json')
// 	.then(data => {
// 		data = JSON.parse(data)
// 		console.log(data.name)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	})


// Promisify 写法
util.promisify(fs.readFile)('../../package.json')
	.then(JSON.parse)
	.then(data=>{
		console.log(data.name)
	})
	.catch(err=>{
		console.log(err)
	})