import { env } from 'node:process';

const parseEnv = () => {
    env.RSS_name1 = 'value1';
    const array = Object.entries(process.env);
    let result = '';
    for (let [key, value] of array) {
        if (key.startsWith('RSS_')) {
            result = `${key} = ${value};`;
        }
    }
    console.log(result.slice(0, -1));
};

parseEnv();