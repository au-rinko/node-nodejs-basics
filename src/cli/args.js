import { argv } from 'node:process';

const parseArgs = () => {
    let result = '';
    for (let i = 2; i < argv.length - 1; i++) {
        if (i % 2 === 0) {
            const propName = argv[i].slice(2);
            if (i === argv.length - 2) {
                result += `${propName} is ${argv[i + 1]}`;
            } else {
                result += `${propName} is ${argv[i + 1]}, `;
            }      
        } else {
            continue;
        }
    }
    console.log(result);
};

parseArgs();
