import { w3cHtmlValidator } from 'w3c-html-validator';

const options = { filename: 'data/Sample.html' };

w3cHtmlValidator.validate(options).then(console.log);
