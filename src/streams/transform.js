import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform: function(chunk, encoding, callback) {
            const reversedData = chunk.toString().split('').reverse().join('');
            callback(null, reversedData);
        }
    });

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();