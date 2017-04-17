angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '千里的鹿',
    lastText: '不知去往哪里',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '行者无疆',
    lastText: '不是我的我',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '归来',
    lastText: '我是一颗草',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '马儿快跑',
    lastText: '代表正义消灭你',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '爱我你怕么',
    lastText: '冬天爱吃冰激凌',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
