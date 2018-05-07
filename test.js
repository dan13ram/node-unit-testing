var main = require("./main")
var chai  = require('chai')

var sum = main.sum
var assert = chai.assert

describe('main module', function() {

    var test_cases = [
        { input: [5,6], output: 11},
        { input: [7,8], output: 15}
    ]

    it('should return sum correcty as per test cases', function( done ) {
        test_cases.forEach(function(tc){
            console.log("testing sum of " + tc.input + " = " + tc.output);
            ans = sum(tc.input[0], tc.input[1])
            assert.equal(ans, tc.output)
        })
        done()
    })
})
