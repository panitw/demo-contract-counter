const { expect } = require("chai");

describe('Counter contract', () => {

    let counter = null;

    beforeEach(async () => {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
    });

    it('Is initialized as 0', async () => {
        const initialCount = await counter.count();
        expect(initialCount).to.equal(0);
    });

    it('Can add counter', async () => {
        await counter.addCount();
        let nextCount = await counter.count();
        expect(nextCount).to.equal(1);

        await counter.addCount();
        nextCount = await counter.count();
        expect(nextCount).to.equal(2);
    });

    it('Emits CounterAdded event', async () => {
        const [addr1] = await ethers.getSigners();
        await expect(counter.connect(addr1).addCount())
            .to.emit(counter, 'CounterAdded')
            .withArgs(addr1.address);
    });
});