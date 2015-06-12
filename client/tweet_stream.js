Template.tweetStream.helpers({
  settings: function() {
    return {
      position: "bottom",
      limit: 5,
      rules: [
        {
          token: "@",
          collection: "Users",
          field: "username",
          subscription: 'usernames',
          matchAll: true,
          template: Template.userPill
        }
      ]
    };
  }
});

Template.tweetStream.events({
  "submit #tweetForm": function(event, template) {
    event.preventDefault();
    text = template.$('.tweet-text').val();
    var loc = {};
    if (Session.get('location'))
      loc = {lat: Session.get('location').coords.latitude, long: Session.get('location').coords.longitude}
    Tweets.insert({text: text, location: loc}, function (err, res) {
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
