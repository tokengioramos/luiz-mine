const { send } = require("../utils/send");
const { getCondition } = require("../utils/getCondition");
const { genericConditionals } = require("../utils/responses/generics");
const { searchGroup } = require("../utils/searchGroup");

const conditionalTriggered = (message) => {
  var filteredMessage;
  const defaultConditionGroup = genericConditionals;

  const conditionGroup = getCondition(message).conditionals;

  filteredMessage =
    searchGroup(defaultConditionGroup, message) ||
    searchGroup(conditionGroup, message);

  if (filteredMessage) {
    send(filteredMessage, message.channel);
    return true;
  }

  return false;
};

exports.conditionalTriggered = conditionalTriggered;
