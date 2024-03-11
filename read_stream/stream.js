const fs = require('fs')

const readAbleStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
})

readAbleStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {

    }
})


readableStream.on('end', () => {
    console.log('Done');
});