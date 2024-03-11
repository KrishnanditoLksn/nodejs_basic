const fs = require('fs')

const writableStream = fs.createWriteStream('output.txt')

writableStream.write('Lorem ipsum dol\n' +
    'or sit amet, co\n' +
    'nsectetur adipi\n' +
    'scing elit, sed\n' +
    'do eiusmod tem\n' +
    'por incididunt\n' +
    'ut labore et do\n' +
    'lore magna aliq\n' +
    'ua. Ut enim ad\n' +
    'minim veniam, q\n' +
    'uis nostrud exe\n' +
    'rcitation ullam\n' +
    'co laboris nisi\n' +
    'ut aliquip ex\n' +
    'ea commodo cons\n' +
    'equat. Duis aut\n' +
    'e irure dolor i\n' +
    'n reprehenderit\n' +
    'in voluptate v\n' +
    'elit esse cillu\n' +
    'm dolore eu fug\n' +
    'iat nulla paria\n' +
    'tur. Excepteur\n' +
    'sint occaecat c\n' +
    'upidatat non pr\n' +
    'oident, sunt in\n' +
    'culpa qui offi\n' +
    'cia deserunt mo\n' +
    'llit anim id es\n');

writableStream.end('Akhir dari writable stream!');