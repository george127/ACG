// import mongoose from 'mongoose';

// const UserFormSchema = new mongoose.Schema({
//   paystack: {
//     email: { type: String, required: true },
//     records: [
//       {
//         semester: { type: String, required: true },
//         installment: { type: String, required: true },
//         firstName: { type: String },
//         lastName: { type: String },
//         phoneNumber: { type: String },
//         status: { type: String },
//         amount: { type: Number },
//         amountPaid: { type: Number },
//         transactionId: { type: String },
//       },
//     ],
//   },
// });

// const UserForm = mongoose.model('paystackDetails', UserFormSchema);

// export default UserForm;

import mongoose from "mongoose";

const UserFormSchema = new mongoose.Schema({
  paystack: {
    email: { type: String, required: true },
    records: [
      {
        semester: { type: String, required: true },
        installment: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        phoneNumber: { type: String },
        status: { type: String },
        amount: { type: Number },
        amountPaid: { type: Number },
        transactionId: { type: String },
        date: {
          type: String,
          default: function () {
            // Format date to include day, month (text), and time
            const options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            const now = new Date();
            return `${now.toLocaleDateString(
              "en-US",
              options
            )} at ${now.toLocaleTimeString("en-US")}`;
          },
        },
      },
    ],
  },
});

const UserForm = mongoose.model("paystackDetails", UserFormSchema);

export default UserForm;
