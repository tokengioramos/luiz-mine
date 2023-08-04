const { random } = require("../utils/random");

const searchGroup = (group, message) => {
  var res = null;
  group.forEach((m) => {
    m.triggers.forEach((t) => {
      if (message.content.toLowerCase().includes(t.toLowerCase()))
        res = m.messages[random(m.messages.length, 0)];
    });
  });
  return res;
};

exports.searchGroup = searchGroup;
