require("babel-register");

var expect=require('expect');
//var ec=require('./task1.js')
import {educCourse} from "./task1.js";
var c = educCourse.topics[0];
describe('educationCourse', function () {
    it('check answers', function () {
        expect(c).toEqual('8');
    });
});