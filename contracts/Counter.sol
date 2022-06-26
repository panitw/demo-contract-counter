// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Counter {

    event CounterAdded(address by);

    uint256 public count = 0;

    function addCount() public {
        // Increase the count by 1
        count = count + 1;

        // Emit an event CountAdded with the address of the function caller
        // as a parameter
        emit CounterAdded(msg.sender);
    }

}