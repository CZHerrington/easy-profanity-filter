var fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        console.log('error in readModuleFile()', path, e);
    }
}

readModuleFile('./data/profanity-list.txt', (err, file) => {
    if (!err) {
        processRawProfanityList(file);
    }
});

function save(data, filename, dir = './data') {
    let file = JSON.stringify(data);
    fs.writeFileSync(`${dir}/${filename}`, file);
    console.log(`saved ${filename} to ${dir}`);
}

function processRawProfanityList(data) {
    const profaneWordArray = data.split('\r\n');
    const whitelist = [];
    const blacklist = [];

    for (let i = 0; i < profaneWordArray.length; i++) {
        const line = profaneWordArray[i];
    
        if (line.includes(':')) {
            // if line includes ":", it is a black:whitelist entry
            const [profanity, acceptableWordList] = line.split(':');
            blacklist.push(profanity);
            whitelist.push(...acceptableWordList.split(','))
        } else {
            blacklist.push(line);
        }
    }
    // save data as JSON
    save(whitelist, 'whitelist.json');
    save(blacklist, 'blacklist.json');
}



