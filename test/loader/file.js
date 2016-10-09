import fileloader from '../../src/loaders/file'

describe.only('file loader', function () {
    it('should return file content', async function (done) {
        let data = await  fileloader('./*.js');
        console.log(data);
        done();
    });
});
