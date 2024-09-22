import { mkdir, readdir, copyFile } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    await mkdir(join(__dirname, '/files_copy'), (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            readdir(join(__dirname, '/files'), (err, files) => {
                if (err) {
                    throw new Error('FS operation failed');
                } else {
                    for (const file of files) {
                        copyFile(join(__dirname, '/files/', file), join(__dirname, '/files_copy/', file), (err) => {
                            if (err) throw new Error('FS operation failed');
                        });
                    }
                } 
            })
        }
    }) 
};

await copy();
