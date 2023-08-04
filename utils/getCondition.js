const {
  genericConditionals,
  genericCommons,
} = require("../utils/responses/generics");
const { womenConditionals, womenCommons } = require("./responses/w");
const { adConditionals, adCommons } = require("./responses/s");

const dotenv = require("dotenv");
dotenv.config();

const { CARGO_MULHER, CARGO_ADM } = process.env;

const getCondition = (message) => {
  if (message.member.roles.cache.some((role) => role.name === CARGO_ADM))
    return { commons: adCommons, conditionals: adConditionals };
  if (message.member.roles.cache.some((role) => role.name === CARGO_MULHER))
    return {
      commons: womenCommons,
      conditionals: womenConditionals,
    };

  return { commons: genericCommons, conditionals: genericConditionals };
};

exports.getCondition = getCondition;
