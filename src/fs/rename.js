import { rename as renameFile, readFile } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    await readFile(join(__dirname, '/files/properFilename.md'), (err) => {
        if (err) {
            renameFile(join(__dirname, '/files/wrongFilename.txt'), join(__dirname, '/files/properFilename.md'), (err) => {
                if (err) throw new Error('FS operation failed');
            });
        } else {
            throw new Error('FS operation failed');
        }
    }) 
};

await rename();