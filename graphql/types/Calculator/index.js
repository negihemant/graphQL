export default `
  type Calculator {
    name: String!
    data: String!
    updatedBy: String!
  }
  type Query {
    calculator(name: String!): Calculator
    calculators: [Calculator]
  }
  type Mutation {
    addCalculator(name: String!, data: String!, updatedBy: String!): Calculator
    editCalculator(name: String, data: String, updatedBy: String): Calculator
    deleteCalculator(name: String, data: String, updatedBy: String): Calculator
  }
`;