import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  order: [{
    menuId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  status: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});
const Order = mongoose.model('Order', orderSchema);

export default Order;
