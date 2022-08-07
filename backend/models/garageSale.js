const mongoose = require('mongoose');

const garageSaleSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    /*Images some how.*/
    /* not sure about the returns here */
    day1: {
        type: date,
        required: true,
    },
    day1_start: {
        type: time,
        required: true,
    },
    day1_end: {
        type: time,
        required: true,
    },
    day2: {
        type: date
    },
    day2_start: {
        type: time
    },
    day2_end: {
        type: time
    },
    day3: {
        type: date
    },
    day3_start: {
        type: time
    },
    day3_end: {
        type: time
    },
    listing_tag1: {
        type: string
    },
    listing_tag2: {
        type: string
    },
    listing_tag3: {
        type: string
    }

})
garageSaleSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

garageSaleSchema.set('toJSON', {
    virtuals: true,
});

exports.listing = mongoose.model('listing', garageSaleSchema);
exports.garageSaleSchema = garageSaleSchema;