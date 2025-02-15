
import { Statistics } from 'src/statistics';
import * as chai from "chai";
const assert = chai.assert;

describe("Standard Normal Cumulative Distribution Function", function () {
    it("should return 0.5", function () {
        assert.equal(Statistics.norm.cdf(0), .5);
    });
    it("should return 1", function () {
        assert.equal(Statistics.norm.cdf(Infinity), 1);
    });
    it("should return 0", function () {
        assert.equal(Statistics.norm.cdf(-Infinity), 0);
    });
    it("should return 1 standard deviation", function () {
        assert.equal(Statistics.norm.cdf(1) - Statistics.norm.cdf(-1), 0.6826894921370861);
    });
    it("should return 2 standard deviations", function () {
        assert.equal(Statistics.norm.cdf(2) - Statistics.norm.cdf(-2), 0.9544997361036414);
    });
    it("should return 3 standard deviations", function () {
        assert.equal(Statistics.norm.cdf(3) - Statistics.norm.cdf(-3), 0.9973002039367396);
    });
});