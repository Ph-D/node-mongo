const assert = require('assert');




exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document);
};

exports.findDocuments = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();

};

exports.removeDocuments = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.delete(document);

};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null);
};