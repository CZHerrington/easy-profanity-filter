import { profanity } from '@2toad/profanity';

// register whitelist
profanity.whitelist.addWords([])

let profane = [
    'this is a bad fucking sentence',
    'this is a badass sentence',
    'this is a bad @ss sentence'
];

let clean = [
    'clean text',
    'cleaner text!'
];


let tester = (testcases) => {
    let output = console.log;
    
    testcases.forEach((test) => {
        let result = profanity.exists(test);
        output({ test, result });
    })
}

tester(profane)
