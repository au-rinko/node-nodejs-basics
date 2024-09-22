import { readdir } from 'node:fs';

const list = async () => {
    await readdir('src/fs/files', (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(files);
        }
    });
};

await list();