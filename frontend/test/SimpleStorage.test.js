const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
    it("should set and get the stored value", async () => {
        const instance = await SimpleStorage.deployed();
        const newValue = 42;

        // Set the value
        await instance.set(newValue, { from: accounts[0] });

        // Get the value
        const storedValue = await instance.get();

        // Check if the stored value is correct
        assert.equal(storedValue, newValue, "Stored value should be 42");
    });
});
