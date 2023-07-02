'use strict';

module.exports = function(Resena) {
    Resena.uploadImage = function(id, req, res, cb) {
        Resena.findById(id, function(err, instance) {
          var storage = require('loopback-component-storage');
          var storageService = storage.StorageService({provider:'filesystem', root:'./server/storage'});
          storageService.upload(req, res, {container: 'multimedia'}, function(err, fileObject) {
              if (err) {
                  cb(err);
              }
              else {
                console.log(fileObject.files.file[0]);
                instance.updateAttributes({
                  img_user: `/api/containers/multimedia/download/${fileObject.files.file[0].name}`
                }, function(err, instance) {
                  if (err) return cb(err);
                  cb(null, fileObject.files.file[0]);
                });
              }
          });
        });
      };
    Resena.remoteMethod(
        'uploadImage',
        {
          description: 'Sube la foto del autor de la Resena',
          accepts: [
              {arg: 'id', type: 'string'},
              {arg: 'req', type: 'object', 'http': {source: 'req'}},
              {arg: 'res', type: 'object', 'http': {source: 'res'}}
          ],
          returns: {arg: 'image', type: 'object'},
          http: {verb: 'post', path: '/:id/image'}
        }
    );
};
