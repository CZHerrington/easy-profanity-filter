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
        this.addBlackListedWords(blacklist);
        this.addWhiteListedWords(whitelist);
    }

    addWhiteListedWords(words) {
        this.filter.whitelist.addWords(words);
    }

    addBlackListedWords(words) {
        this.filter.blacklist.addWords(words);
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
