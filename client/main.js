import chance from 'chance';

var MESSAGE_QUERIES = 'messages:queries';
var MESSAGE_CURRENT = 'messages:current';

Template.messagesNew.helpers({
  queries: function() {
    return Session.get(MESSAGE_QUERIES);
  }
});

Template.messagesNew.events({
  'keyup #message-new-text': function(e) {
    var $len = $('#message-new-text-length');
    var $text = $(e.target);
    var len = $text.val().length;
    $len.html(len === 0 ? '' : len + (len === 1 ? ' char' : ' chars'));
  },

  'click .query-add': function(e) {
    e.preventDefault();
    var id = chance().word({ length:16 });
    var queries = Session.get(MESSAGE_QUERIES);
    if (!queries) {
      queries = [];
    }
    queries.push({
      id: id
    });
    Session.set(MESSAGE_QUERIES, queries);
  },

  'click .btn-remove': function(e, instance) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var $target = instance.$(e.currentTarget);
    var id = $target.data('id'); // ************* This is wrong any click but first
    var queries = Session.get(MESSAGE_QUERIES);
    var toRemove = -1;
    $target.blur();
    queries.forEach(function(query, index) {
      if (query.id === id) {
        toRemove = index;
      }
    });
    if (toRemove === -1) {
      return console.warn('Nothing found with id:', id);
    }
    console.log('Removing query with id:', id, 'in position:', toRemove);
    queries.splice(toRemove, 1);
    Session.set(MESSAGE_QUERIES, queries);
  }
});
