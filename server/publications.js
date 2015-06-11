Meteor.publish('tweets', function() {
  return Tweets.find({});
});

Meteor.publish('profile', function(username) {
  return Meteor.users.find({username: username}, {fields: {username: 1, profile: 1}});
});