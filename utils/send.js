const { random } = require("../utils/random");
const { ACTIVATION_PROB } = process.env

const send = (msg, channel) => {
  const rand = random(100, 0);
  if (rand < ACTIVATION_PROB) {
    const message = msg || "a";
    setTimeout(() => {
      channel.send(message);
    }, 1000 * random(2));
  }
};

exports.send = send;
