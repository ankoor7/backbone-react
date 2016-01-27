"use strict";
var UsersCollection = require('../collections/users-collection'),
    UserModel = require('../models/user'),
    UsersIndexView = require('../screens/users/index'),
    UserShowView = require('../screens/users/show');

var UsersController = function (options) {
  var app = options.app;

  return {
    index: function  () {
      var usersCollection = new UsersCollection();

      usersCollection.fetch().done(function () {
        var usersView = new UsersIndexView({
          users: usersCollection
        });
        app.mainView.pageRender(usersView);
      });
    },

    show: function (id) {
      var user = new UserModel({
        id: id
      });

      user.fetch().done(function () {
        var userView = new UserShowView({
          user: user
        });
        app.mainView.pageRender(userView);
      });
    }
  };
};

module.exports = UsersController;