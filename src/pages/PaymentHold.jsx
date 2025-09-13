import React from 'react';

import { PAYMENT_HOLD_MESSAGE } from '../config';

export default function PaymentHold() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="max-w-lg w-full text-center">
        <div className="text-6xl mb-4 font-extrabold text-red-600">403</div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Payment Required
        </h1>
        <p className="text-gray-300 mb-8">
          {PAYMENT_HOLD_MESSAGE || 'This site is temporarily unavailable because payment has not been completed.'}
        </p>
        <div className="text-sm text-gray-400">
          If you are the owner, please complete the payment to restore access.
        </div>
      </div>
    </div>
  );
}


