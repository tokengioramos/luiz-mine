const { send } = require("../utils/send");
const { getCondition } = require("../utils/getCondition");
const { random } = require("../utils/random");

const groupCommons = (message) => {
  const conditionGroup = getCondition(message).commons;
  send(
    conditionGroup[random(conditionGroup.length, 0)].replace(
      "username",
      message.author.username
    ),
    message.channel
  );
};

exports.groupCommons = groupCommons;
