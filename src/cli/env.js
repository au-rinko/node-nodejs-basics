import { env } from 'node:process';

const parseEnv = () => {
    env.RSS_name1 = 'value1';
    const array = Object.entries(process.env);
    for (let [key, value] of array) {
        if (key.startsWith('RSS_')) {
            console.log(`${key} = ${value};`);
        }
    }
};

parseEnv();