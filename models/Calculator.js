import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const CalculatorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
    required: true
  }
});

const Calculator = mongoose.model("NewModel", CalculatorSchema);

export default Calculator;