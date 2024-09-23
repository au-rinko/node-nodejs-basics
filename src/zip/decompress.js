import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const gunzip = createGunzip();
    const readableStream = createReadStream(join(__dirname, '/files/archive.gz'));
    const writableStream = createWriteStream(join(__dirname, '/files/fileToCompress.txt'));
    
    readableStream.pipe(gunzip).pipe(writableStream);
};

await decompress();