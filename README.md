# Easy Profanity Filter

## Instructions
1. install: `npm install easy-profanity-filter --save`
2. import: `import ProfanityFilter from 'easy-profanity-filter`
3. use: `let filter = new ProfanityFilter();`

## API

### ProfanityFilter::detect(string):
`filter.detect('this sentence does not contain expletives')`
returns `false`;

### ProfanityFilter::censor(string):
`filter.addBlackListedWords('expletive')`
`filter.censor('this sentence contains an expletive')`
returns `this sentence contains an *****`