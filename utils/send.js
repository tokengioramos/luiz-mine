const { random } = require("../utils/random");

const send = (msg, channel) => {
  const message = msg || "a";
  setTimeout(() => {
    channel.send(message);
  }, 1000 * random(2));
};

exports.send = send;
