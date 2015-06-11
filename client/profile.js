Template.profile.helpers({
  following: function() {
    return _(Meteor.user().profile.followingIds).contains(this.user._id);
  }
});

Template.profile.events({
  'click .follow': function(e, t) {
    e.preventDefault();
    Meteor.call('follow', t.data.user._id);
  },
  'click .unfollow': function(e, t) {
    e.preventDefault();
    Meteor.call('unfollow', t.data.user._id);
  }
});
