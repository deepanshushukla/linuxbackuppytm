/**
 * Created by deepanshushukla on 2/9/17.
 */
var app = angular.module('userinfoapp');
app.factory('urlConfig', function() {
var urls= {
    getUserUrl: function (text) {
        return "https://api.github.com/search/users?q=" + text
    },
    getUserDataUrl: function (id) {
        return "https://api.github.com/search/repositories?q=user:" + id
    }
};

    return urls
}