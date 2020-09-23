const {
  addToborrowersList,
  markBookAsUnavailable,
  emptyBorrowedBooksList,
} = require("../../index");

const setUpMockData = () => {
  emptyBorrowedBooksList();
  addToborrowersList(1);
  markBookAsUnavailable(1);
};

module.exports = {
  setUpMockData,
};
