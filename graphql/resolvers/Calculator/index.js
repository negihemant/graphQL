// The Calculator schema.
import Calculator from "../../../models/Calculator";

export default {
  Query: {
    calculator: (root, args) => {
      return new Promise((resolve, reject) => {
        Calculator.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    calculators: () => {
      return new Promise((resolve, reject) => {
        Calculator.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addCalculator: (root, {  name, data, updatedBy }) => {
      const newCalculator = new Calculator({ name, data, updatedBy });

      return new Promise((resolve, reject) => {
        newCalculator.save((err, res) => {
          if(err)
          console.log(err)
          
          err ? reject(err) : resolve(res);
        });
      });
    },
    editCalculator: (root, { name, data, updatedBy }) => {
      return new Promise((resolve, reject) => {
        Calculator.findOneAndUpdate({ name }, { $set: {  data, updatedBy } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteCalculator: (root, args) => {
      return new Promise((resolve, reject) => {
        Calculator.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};