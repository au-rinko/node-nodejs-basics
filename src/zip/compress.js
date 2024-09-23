import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const zip = createGzip();
    const readableStream = createReadStream(join(__dirname, '/files/fileToCompress.txt'));
    const writableStream = createWriteStream(join(__dirname, '/files/archive.gz'));

    pipeline(readableStream, zip, writableStream, (err) => {
        if (err) console.log(err);
    });
};

await compress();