const { tenorStart } = require("../APIS/tenor/tenor");
const { random } = require("../utils/random");

const possibleGifs = ["daniel molo", "gay men kiss", "bingus"];

const sendGif = (cond, channel) => {
  if (cond === 1) {
    tenorStart(possibleGifs[random(possibleGifs.length, 0)], channel);
    return true;
  }
  return false;
};

exports.sendGif = sendGif;
