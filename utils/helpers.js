module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  // format_amount: (amount) => {
  //   // format large numbers with commas
  //   return parseInt(amount).toLocaleString();
  // },
  compare: function (var1, comparator, var2) {
    if (eval(var1 + comparator + var2)) {
      return true
    } else {
      return false
    }
  },


  ifEquals: function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  },
};


