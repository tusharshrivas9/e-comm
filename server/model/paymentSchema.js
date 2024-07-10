// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Assuming you have a User model
        required: true,
    },
    amount_total: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    payment_status: {
        type: String,
        required: true,
    },
    payment_method: {
        type: String,
        required: true,
    },
    session_id: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
