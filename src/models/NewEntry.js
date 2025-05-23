const mongoose = require('mongoose');

const NewEntrySchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // this should match the name of your Customer model
    required: true
  },
  receiptNo: {
    type: Number,  // This will store the incremented receipt number
    required: true
  },
  service: {
    type: String,
    required: true
  },

  products: [
    {
      productName: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      unitPrice: {
        type: Number,
        required: true
      },
      amount: {
        type: Number, // Can be derived: quantity * unitPrice
        required: true
      }
    }
  ],

  charges: {
    subtotal: {
      type: Number,
      required: true
    },
    taxAmount: {
      type: Number,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    }
  },

  pickupAndDelivery: {
    pickupType: {
      type: String,
      enum: ['Self', 'Agent', 'Courier'],
      required: true
    },
    deliveryType: {
      type: String,
      enum: ['Self', 'Agent', 'Courier'],
      required: true
    }
  }

}, { timestamps: true });

module.exports = mongoose.model('NewEntry', NewEntrySchema);
