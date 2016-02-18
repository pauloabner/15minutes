angular.module('starter.services', [])

.factory('Elements', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var elements = [{
    id: 0,
    day: 'SEGUNDA',
    subject: 'Português'
  },{
    id: 1,
    day: 'TERÇA',
    subject: 'Português'
  },{
    id: 2,
    day: 'QUARTA',
    subject: 'Português'
  },{
    id: 3,
    day: 'QUINTA',
    subject: 'Português'
  },{
    id: 4,
    day: 'SEXTA',
    subject: 'Português'
  }];

  return {
    all: function() {
      return elements;
    },
    remove: function(element) {
      chats.splice(elements.indexOf(element), 1);
    },
    get: function(elementId) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].id === parseInt(elementId)) {
          return elements[i];
        }
      }
      return null;
    }
  };
});
