const db = require('../db');
const nodemailer = require('nodemailer');

function mockDbQueryOnce(result) {
  db.dbQuery.mockResolvedValueOnce(result);
}
function mockDbQueryRejectOnce(err = new Error('DB error')) {
  db.dbQuery.mockRejectedValueOnce(err);
}
function mockDbHealth(ok = true) {
  db.dbHealthcheck.mockResolvedValue(ok);
}
function getSendMailMock() {
  return nodemailer.__mocks__.sendMailMock;
}

module.exports = { mockDbQueryOnce, mockDbQueryRejectOnce, mockDbHealth, getSendMailMock };
