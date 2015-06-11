Template.header.helpers({
  username: function() {
    return Meteor.user().username;
  }
});
