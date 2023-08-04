const { random } = require("../../utils/random");

const Tenor = require("tenorjs").client({
  Key: "AIzaSyBP7h5EzFYyFtwu0h-NZnbhFv84a6Jwib4", // https://developers.google.com/tenor/guides/quickstart
  Filter: "off", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_US", // Your locale here, case-sensitivity depends on input
  MediaFilter: "minimal", // either minimal or basic, not case sensitive
  DateFormat: "D/MM/YYYY - H:mm:ss A", // Change this accordingly
});

const tenorStart = (query, channel) => {
  Tenor.Search.Query(query, query !== "gay men kiss" ? "1" : "4").then(
    (Results) => {
      let randomNumber = random(Results.length, 0);
      if (Results[randomNumber].url === "https://tenor.com/bzy64.gif")
        randomNumber = 9;
      channel.send(Results[randomNumber].url);
    }
  );
};

exports.tenorStart = tenorStart;
