module.exports = ({ env }) => ({
  auth: {
    secret: '1e2ba921ca0424120201681eb884282c941ea0c20af3a07aef0fb69955d9e77a',
  },
  apiToken: {
    salt: 'b3382405a423b8aca8f56e747eb144da906ccffa56a60b0bb87f8b14c309af92',
  },
  transfer: {
    token: {
      salt: '977dcb02ad94e050cf4658ac76da4f4b3492fcefd76e27aba336c4fff0f64278',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
