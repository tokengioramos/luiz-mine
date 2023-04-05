const searchGroup = (group, message) => {
  var res = null;
  group.forEach((m) => {
    m.triggers.forEach((t) => {
      if (message.content.toLowerCase().includes(t.toLowerCase()))
        res = m.message;
    });
  });
  return res;
};

exports.searchGroup = searchGroup;
