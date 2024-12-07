const gql = require('graphql-tag');

async function createPurchase(root, args, context, info) {
  const cartItems = await context.db.query.cartItems(
    {
      where: {
        user: { email: context.payload.email },
        variant: { active: true },
      },
    },
    gql`
      {
        id
        quantity
        note
        utmSource
        utmMedium
        utmCampaign
        utmTerm
        utmContent
        user {
          firstName
          lastName
          point
          isMemberOrangeSquad
          isMmemberOrangeSquadActive
          addresses {
            id
          }
        }
        variant {
          id
          name
          hex
          stock
          useManualStock
          manualStock
          isPreOrder
          isPickupInStoreOnly
          isCrazyTimeSale
          isPersonalization
          product {
            id
            name
            description
            price
            priceDiscountType
            priceDiscount
            weight
            promotion {
              type
              value
              active
              startDate
              endDate
            }
            expiredTransaction
            onlyMobile
            onlyWeb
            benefitText
            isFlashSale
          }
        }
        productBundling {
          bundlingId
          productId
          productName
          productIdParent
          eanCode
          variantId
          imageUrl
          type
          description
        }
      }
    `
  );

  for (const item of cartItems) {
    if (args.isBuyGiftCard === true) {
      if (item.variant.product.id !== 'abcie12e12lasdp312klsa') {
        return false;
      }
    }

    const validCouriers = ['jne', 'jnt', 'pos'];
    if (!validCouriers.includes(args.courier)) {
      return false;
    }

    if (args.isWeb !== true) {
      return false;
    }

    if (item.quantity > 4) {
      return false;
    }
  }

  return true;
}

module.exports = createPurchase;
