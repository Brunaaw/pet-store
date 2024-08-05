const Care = require('./Care');

class BasicCare extends Care {
    provideCare() {
        return 'Basic care provided.';
    }
}

module.exports = BasicCare;
