var balanceManager = require('./balanceManager');

module.exports = {
    getAmount: function(coinType) {
          // COINS:
          // [p]enny
          // [n]ickel
          // [d]ime
          // [q]uarter
        if (coinType === 'p') {
            return 1;
        }

        if (coinType === 'n') {
            return 5;
        }

        if (coinType === 'd') {
            return 10;
        }

        if (coinType === 'q') {
            return 25;
        }

        throw new Error('Unrecognized coin ' + coinType);
    }
};
