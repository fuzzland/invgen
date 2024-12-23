"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportRevertedWithError = supportRevertedWithError;
function supportRevertedWithError(Assertion) {
    Assertion.addMethod('revertedWithError', function (revertReason) {
        const promise = this._obj;
        const assertNotReverted = () => this.assert(false, 'Expected transaction to be reverted', 'Expected transaction NOT to be reverted', 'Transaction reverted.', 'Transaction NOT reverted.');
        const onError = (error) => {
            const revertString = error?.receipt?.revertString ?? decodeHardhatError(error, this);
            const isReverted = revertReason instanceof RegExp ? revertReason.test(revertString) : revertString === revertReason;
            this.assert(isReverted, `Expected transaction to be reverted with "${revertReason}", but other reason was found: "${revertString}"`, `Expected transaction NOT to be reverted with "${revertReason}"`, `Transaction reverted with "${revertReason}"`, error);
            return error;
        };
        const derivedPromise = promise.then(assertNotReverted, onError);
        this.then = derivedPromise.then.bind(derivedPromise);
        this.catch = derivedPromise.catch.bind(derivedPromise);
        this.txMatcher = 'revertedWithError';
        return this;
    });
}
const decodeHardhatError = (error, context) => {
    const tryDecode = (error) => {
        const errorString = String(error);
        let regexp = /VM Exception while processing transaction: reverted with custom error '([a-zA-Z0-9]+)\((.*)\)'/g;
        let matches = regexp.exec(errorString);
        if (matches && matches.length >= 1) {
            const errorName = matches[1];
            context.txErrorName = errorName;
            return errorName;
        }
        regexp = /VM Exception while processing transaction: reverted with reason string ["']([\w\d: ]*)["']/;
        matches = regexp.exec(errorString);
        if (matches && matches.length >= 1) {
            const errorName = matches[1];
            context.txErrorName = errorName;
            return errorName;
        }
        regexp = /VM Exception while processing transaction: reverted with panic code ([a-zA-Z0-9]*)/;
        matches = regexp.exec(errorString);
        if (matches && matches.length >= 1) {
            return `panic code 0x${Number(matches[1]).toString(16)}`;
        }
        regexp = /Error: Transaction reverted: (.*)/;
        matches = regexp.exec(errorString);
        if (matches && matches.length >= 1) {
            return matches[1];
        }
        regexp = /Transaction reverted without a reason string/;
        matches = regexp.exec(errorString);
        if (matches && matches.length >= 1) {
            return matches[0];
        }
        regexp = /errorName="(.*)", errorSignature/;
        matches = regexp.exec(errorString);
        if (matches && matches.length >= 1) {
            const errorName = matches[1];
            context.txErrorName = errorName;
            return errorName;
        }
        return undefined;
    };
    return tryDecode(error) ?? tryDecode(error.error); // the error may be wrapped
};
exports.default = supportRevertedWithError;
//# sourceMappingURL=RevertedWithError.js.map