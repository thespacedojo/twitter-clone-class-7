Template.tweetStream.helpers({
  tweets: function() {
    return Tweets.find();
  },
  tweetedTime: function() {
    return moment(this.tweetedAt).fromNow();
  }
});

Template.tweetStream.events({
  "submit #tweetForm": function(event, template) {
    event.preventDefault();
    text = template.$('.tweet-text').val();
    Tweets.insert({text: text}, function (err, res) {
      if (res) {
        CoffeeAlerts.success('Your tweet has been added.');
        template.$('.tweet-text').val(null);
      } else {
        CoffeeAlerts.warning('There was a problem adding your tweet, try again later.');
        console.log(err);
      }
    });
  }
});
