import { argv } from 'node:process';

const parseArgs = () => {
    argv.forEach((val, index) => {
        console.log(`${index} is ${val}`);
    });
};

parseArgs();
