const fs = require('fs')
let arr = []
for (let i = 0; i < 10; i++) {
    let obj = {}
    obj.id = i
    arr.push(obj)
}
let obj = { data: arr }
fs.writeFile('./template.json', JSON.stringify(obj), callback => {
    console.log('success')
})
