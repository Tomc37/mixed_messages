const signs = ['Cancer', 'Aries', 'Taurus', 'Gemini', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const messages = ['You will be lucky in love today!', 'Today shall bring you wealth!', 'You will die today, sorry :(', 'Beware strange men in brown coats!', 'It is alien invasion day!'];
const randSign = signs[Math.floor(Math.random()*signs.length)];
const randMessage = messages[Math.floor(Math.random()*messages.length)];
console.log ('Your sign is: ' + randSign);
console.log('What this means for you: ' + randMessage);
