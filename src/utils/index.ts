import _get from 'lodash/get';

const makeResult = result => {
  // if (result === undefined || result === null) throw Error('makeResult: result should not be undefined or null');
  return { error: null, errorCode: '', result };
};

const makeError = (errorCode, error = {}) => {
  if (typeof errorCode !== 'string') throw Error('makeError: error code must be a string');
  return { error, errorCode, result: null };
};


function satc(promisifiedFunc, ...arg) {
  return new Promise((resolve, reject) => {
    promisifiedFunc(...arg)
      .then(res => {
        const result = makeResult(res);
        resolve(result);
      })
      .catch(err => {
        const errcode = _get(err, 'data.error.code'); // for any raw errors
        const summaryErrorCode = _get(err, 'data.summary.code');
        if (!errcode && !summaryErrorCode) resolve(makeError('NO_ERROR_CODE', err));
        resolve(makeError(errcode || summaryErrorCode, err));
      });
  });
}

export default satc;