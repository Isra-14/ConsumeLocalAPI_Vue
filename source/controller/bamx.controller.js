const db = require("../database/database.js")

module.exports.GetDonors = (req, res, next) => {
  let sql = "SELECT * FROM donors"
  db.query(sql, (err, results, fields) => {
    if (err) res.send(error)
    res.json(results)
  })
}