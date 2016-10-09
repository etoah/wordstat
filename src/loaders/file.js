import gs from 'glob-stream';

export default function (globs, options = {}) {
    let stream = gs.create(globs, options);
    let data = '',
        promise = new Promise();
    stream.on('data', (file) => {  //Todo should optimize when file too large.
        data += file;
    });
    stream.on('end', () => {
        promise.resolve(data);
    });
    stream.on('error', (err) => {
        promise.reject(err);
    });
    return promise;
}