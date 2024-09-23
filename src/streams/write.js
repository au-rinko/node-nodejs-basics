import { createWriteStream } from 'node:fs';
import { argv } from 'node:process';
import { stdin } from 'node:process';

const write = async () => {
    const writeStream = createWriteStream('src/streams/files/fileToWrite.txt');
    stdin.pipe(writeStream);
    
    stdin.on('end', () => {
        writeStream.end();
    });

};

await write();