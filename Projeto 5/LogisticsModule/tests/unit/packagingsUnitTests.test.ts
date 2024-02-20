const assert = require('assert');

describe('Packaging', () => {

    let packaging;

    beforeEach(() => {
        packaging = {
            xPosition: 5,
            yPosition: 15,
            zPosition: 3,
            licensePlate: '53-35-DF',
        };
    });


    it('should have an xPosition attribute that is a number between 0 and 10', () => {

        assert.strictEqual(typeof packaging.xPosition, 'number');
        assert.ok(packaging.xPosition >= 0 && packaging.xPosition < 10);
    });

    it('should have a yPosition attribute that is a number between 0 and 20', () => {

        assert.strictEqual(typeof packaging.yPosition, 'number');
        assert.ok(packaging.yPosition >= 0 && packaging.yPosition < 20);
    });

    it('should have a zPosition attribute that is a number between 0 and 8', () => {

        assert.strictEqual(typeof packaging.zPosition, 'number');
        assert.ok(packaging.zPosition >= 0 && packaging.zPosition < 8);
    });

    it('should have a licensePlate attribute that is a string', () => {

        assert.strictEqual(typeof packaging.licensePlate, 'string');
    });

    it('should return true if license plate follows correct format', () => {
        const packaging1 = {
            xPosition: 5,
            yPosition: 15,
            zPosition: 3,
            licensePlate: '5353554DF'
        };
        assert.ok(/([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/.test(packaging.licensePlate));
        assert.ok(!/([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/.test(packaging1.licensePlate));
    });
});