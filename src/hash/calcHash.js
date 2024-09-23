import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const hash = createHash('sha256');

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const stream = createReadStream(join(__dirname, '/files/fileToCalculateHashFor.txt'));

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });
    
    stream.on('end', () => {
      const digest = hash.digest('hex');
      console.log(digest);
    });

    stream.on('error', (err) => {
      if (err) console.log(err);
  });
};

await calculateHash();