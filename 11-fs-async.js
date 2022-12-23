//FS Module
const {readFile, writeFile} = require('fs');

console.log('~~ Start with the 1st task ~~');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(first);
    console.log('~~ Done with the 1st task. Doing the 2nd task ~~');
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);
        console.log('~~ Done with the 2nd task. Writing to result-sync.txt ~~');
        writeFile('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag:'a'},  (err,result) => {
           if (err) {
            return;
           } 
           console.log('~~ Done with writing ~~');
        });
    })
})

