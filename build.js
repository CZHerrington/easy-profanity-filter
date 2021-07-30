import ProfanityFilter, { defaultOptions } from './index'

let filter = new ProfanityFilter();

console.log(
filter.detect('fuck'),
filter.detect('cat')
)