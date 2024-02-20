const assert = require('assert');

describe('route', () => {
    let route;

    beforeEach(() => {
        route = {
            distance: 100,
            width: 5,
            time: 60,
            extraTime: 10,
            energy: 10,
            originId: 'W01',
            destinationId: 'W02'
        };
    });

    it('should have a distance greater than 0', () => {
        assert(route.distance > 0);
    });

    it('should have a width greater than 0', () => {
        assert(route.width > 0);
    });

    it('should have a time greater than 0', () => {
        assert(route.time > 0);
    });

    it('should have an extra time greater than or equal to 0', () => {
        assert(route.extraTime >= 0);
    });

    it('should have an energy greater than 0', () => {
        assert(route.energy > 0);
    });

    it('should have an originId string', () => {
        assert.strictEqual(typeof route.originId, 'string');
    });

    it('should have a destinationId string', () => {
        assert.strictEqual(typeof route.destinationId, 'string');
    });

    it('should have a defined originId', () => {
        assert.strictEqual(route.originId, 'W01');
    });

    it('should have a defined destinationId', () => {
        assert.strictEqual(route.destinationId, 'W02');
    });

    it('should not have the same originId and destinationId', () => {
        assert.notStrictEqual(route.originId, route.destinationId);
    });

});