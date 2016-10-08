import stringStats from '../../src/wordstat'

describe('word stats', function () {
    it('should stat words inline', function () {
        let result = stringStats(`aaa bb, aa dd cc aaa aar , er34`);
        result.aaa.should.be.eql(2);
        result.aa.should.be.eql(1);
    });

    it('should stat words multi-line', function () {
        let result = stringStats(`Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
        Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
         Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

         The ES6 section describes the three ES6 feature groups, and details which features are enabled by default in Node.js, 
         alongside explanatory links. It also shows how to find which version of V8 shipped with a particular Node.js release.
         `);
        result.js.should.be.eql(5);
        result.node.should.be.eql(5);
    });

    it('should stat words case insensitive', function () {
        let result = stringStats(`Node node nOde nodE  `);
        console.log('result:',result);
        result.node.should.be.eql(4);
    });

});