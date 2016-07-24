var _ = require('lodash'),
    path = require('path');

module.exports = function(opts) {

    opts = _.extend({
        key: 'data'
    }, (opts || {}));

    return function(files, metalsmith, done) {
        _.each(files, function (file, key) {
            if (path.extname(key) === '.json') {
                file["_json"] = JSON.parse(file.contents);
            }
        });

        _.each(files, function (file, key) {
          if (file.load_json) {
            file[opts.key] = files[file.load_json]._json;
          }
        });

        done();
    };
};
