const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal("Error");
        expect(formatFullname({})).to.equal("Error");
        expect(formatFullname([])).to.equal("Error");
        expect(formatFullname(function () {})).to.equal("Error");
    })

    it('should return an error if "fullName" arg is "" ', () => {
        expect(formatFullname()).to.equal('Error');
    })

    it('should return <firstName> and <lastName>', () => {
        expect(formatFullname("lorem ipsum")).to.equal("Lorem Ipsum");
        expect(formatFullname("lorem IPSUM")).to.equal("Lorem Ipsum");
        expect(formatFullname("LOREM IPSUM")).to.equal("Lorem Ipsum");
    })

    it('should return an error if "fullName" there is a different format', () => {
        expect(formatFullname('lorem')).to.equal('Error');
        expect(formatFullname('lorem ipsum lorem')).to.equal('Error');
    })
})