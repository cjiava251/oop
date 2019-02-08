
var expect=require('expect');
//var ec=require('./task1.js')
import ec from './task1.js';
var c = ec.topics[0];
describe('educationCourse', function () {
    it('check answers', function () {
        expect(c).toEqual('8');
    });
});