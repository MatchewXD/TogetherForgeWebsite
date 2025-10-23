const sendMailMock = jest.fn().mockResolvedValue({ accepted: ['ok@local'] });
const createTransport = jest.fn(() => ({ sendMail: sendMailMock }));

module.exports = { createTransport, __mocks__: { sendMailMock } };
