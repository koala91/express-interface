const util = require('util')

module.exports = () => {
  return (error, req, res, next) => {
    console.log('error', error);
    res.status(500).json({
      error: util.format(error)
    })
  }
}