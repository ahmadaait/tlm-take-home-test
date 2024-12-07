const createPurchase = require('./index');

(async () => {
  const argsTrue = {
    userAddressId: 'address123',
    courier: 'jne',
    service: 'regular',
    freeshipping: false,
    paymentMethod: 'credit_card',
    paymentCode: 'cc',
    isBuyGiftCard: true,
    isWeb: true,
  };

  const contextTrue = {
    payload: { email: 'user@example.com' },
    db: {
      query: {
        cartItems: async () => [
          {
            id: 'item1',
            quantity: 2,
            variant: {
              id: 'variant1',
              product: { id: 'abcie12e12lasdp312klsa' },
            },
          },
        ],
      },
    },
  };

  const resultTrue = await createPurchase(null, argsTrue, contextTrue, null);
  console.log('Result (Expected: true):', resultTrue); // Expected: true

  const argsFalse = {
    userAddressId: 'address123',
    courier: 'dhl',
    service: 'regular',
    freeshipping: false,
    paymentMethod: 'credit_card',
    paymentCode: 'cc',
    isBuyGiftCard: true,
    isWeb: true,
  };

  const contextFalse = {
    payload: { email: 'user@example.com' },
    db: {
      query: {
        cartItems: async () => [
          {
            id: 'item1',
            quantity: 2,
            variant: {
              id: 'variant1',
              product: { id: 'abcie12e12lasdp312klsa' },
            },
          },
        ],
      },
    },
  };

  const resultFalse = await createPurchase(null, argsFalse, contextFalse, null);
  console.log('Result (Expected: false):', resultFalse); // Expected: false
})();
