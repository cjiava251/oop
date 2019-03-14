require("babel-register");

var expect=require('expect');
//var ec=require('./task1.js')
import * as ec from '/p1/task1.js';
var c = ec.topics[0];
describe('educationCourse', function () {
    it('check answers', function () {
        expect(c).toEqual('8');
    });
});