import utils from '../../src/scripts/utils/utils'

describe('generateRandomColour::', function () {
    it('should return a hex colour code', function () {
        const hexValue = utils.generateRandomColour();

        expect(hexValue.length).toBe(7);
        expect(hexValue[0]).toBe('#');
    });
});