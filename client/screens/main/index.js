var Backbone = require('backbone'),
    BaseView = require('../base-view'),
    MainComponent=require('./component');


var MainView = BaseView.extend({
    component: function () {
        return new MainComponent({
            router: this.option.router
        });
    },

    pageRender: function (view) {
        this.$('#main-container').html(view.render().$el);
    }
});

module.exports = MainView;