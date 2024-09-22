import { readFile, writeFile } from 'node:fs';

const create = async () => {
    const string = 'I am fresh and young';
    await readFile('src/fs/files/fresh.txt', (err) => {
        if (err) {
            writeFile('src/fs/files/fresh.txt', string, (err) => {
                if (err) console.log(err);
            });
        } else {
            throw new Error('FS operation failed');
        }
    });   
};

await create();