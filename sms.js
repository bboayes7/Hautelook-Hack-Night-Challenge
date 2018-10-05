

const config = require('./config')
const client = require('twilio')(config.account_sid, config.auth_token);

client.messages.create(
  {
    to: config.my_phone_number,
    from: config.phone_number,
    body: 'Your package has been delivered',
  })
  .then(message => console.log(`message sent`))
  .catch(err => console.log(err))
  .done();
