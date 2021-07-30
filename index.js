import { Profanity, ProfanityOptions } from '@2toad/profanity';
import whitelist from './data/whitelist.js';
import blacklist from './data/blacklist.js';

export const defaultOptions = {
    wholeWord: false,
    grawlix: '****'
}

class ProfanityFilter {
    constructor(options = defaultOptions) {
        const profanityOptions = new ProfanityOptions();

        profanityOptions.wholeWord = options.wholeWord;
        profanityOptions.grawlix = options.grawlix;

        this.filter = new Profanity(profanityOptions);
        this.filter.whitelist.addWords(whitelist);
        this.filter.blacklist.addWords(blacklist);
    }

    detect(text) {
        return this.filter.exists(text);
    }

    censor(text) {
        return this.filter.censor(text);
    }

    setWholeWordOnly(bool) {
        if (typeof bool == 'boolean') {
            this.filter.wholeWord = bool;
        }
    }
};

export default ProfanityFilter;

let filter = new ProfanityFilter();

// TESTING
let profane = [
    'this is a fucking sentence',
    'you are being an ass',
    'don\'t be a cunt',
    'cunting',
    'this sentence is as clean as a mormon!',
    'I like cats',
    'I have the assist',
    '3487532875623984756'
];

let tester = (testcases) => {
    let output = console.log;
    
    testcases.forEach((test) => {
        let result = filter.detect(test);
        output({ test, result });
    })
}

tester(profane)

