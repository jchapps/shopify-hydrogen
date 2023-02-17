import{T as l,a as I,b as p,r as C,d as f,e as h,f as F,g as S}from"./index.6f748f0d.js";import{ShopifyContext as b}from"./f0cb2633.js";import{u as D}from"./3ed2f817.js";import"./02637587.js";import{f as L}from"./92add5bc.js";import{u as A}from"./d6282b27.js";const v=t=>`
mutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,U=t=>`
mutation CartCreate($input: CartInput!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartCreate(input: $input) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,P=t=>`
mutation CartLineRemove($cartId: ID!, $lines: [ID!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesRemove(cartId: $cartId, lineIds: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,H=t=>`
mutation CartLineUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,M=t=>`
mutation CartNoteUpdate($cartId: ID!, $note: String, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,V=t=>`
mutation CartBuyerIdentityUpdate(
  $cartId: ID!
  $buyerIdentity: CartBuyerIdentityInput!
  $numCartLines: Int = 250
  $country: CountryCode = ZZ
) @inContext(country: $country) {
  cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,Y=t=>`
mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,j=t=>`
mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,q=t=>`
query CartQuery($id: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cart(id: $id) {
    ...CartFragment
  }
}

${t}
`,_=`
fragment CartFragment on Cart {
  id
  checkoutUrl
  totalQuantity
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          compareAtAmountPerQuantity {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              id
              handle
              title
              vendor
              productType
            }
            selectedOptions {
              name
              value
            }
            sku
          }
        }
      }
    }
  }
  cost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;function x(){const t=D(e=>e.ctx.shopifyConfig,b);if(!t)throw new Error("No Shopify Context found");return t}function g(){const{storeDomain:t,storefrontApiVersion:e,storefrontToken:u,storefrontId:r}=x();return l.useCallback(({query:s,variables:d})=>{const n={"Content-Type":"application/json","X-SDK-Variant":"hydrogen","X-SDK-Version":e,[f]:u};r&&(n[h]=r);const a=A(document.cookie);return a[I]&&a[p]&&(n[F]=a[I],n[S]=a[p]),fetch(`https://${t}/api/${e}/graphql.json`,{method:"POST",headers:n,body:JSON.stringify({query:s.toString(),variables:d})}).then(o=>o.json()).catch(o=>({data:void 0,errors:o.toString()}))},[t,e,u,r])}function O(){const[t,e]=C.exports.useState(),[u,r]=C.exports.useState(),[s,d]=C.exports.useState(),n=g(),a=l.useCallback(async o=>{var m,$;const{data:i,errors:y}=await n({query:U(_),variables:{input:o}});if(y&&(d(y),e(void 0),r(void 0)),(m=i==null?void 0:i.cartCreate)!=null&&m.cart){const c=i.cartCreate.cart;e({...c,lines:L(c.lines),note:($=c.note)!=null?$:void 0}),r(c.checkoutUrl)}},[n]);return{cart:t,checkoutUrl:u,error:s,createInstantCheckout:a}}var B=Object.freeze(Object.defineProperty({__proto__:null,useCartFetch:g,useInstantCheckout:O},Symbol.toStringTag,{value:"Module"}));export{q as C,U as a,v as b,H as c,P as d,M as e,V as f,Y as g,j as h,_ as i,O as j,B as k,g as u};
//# sourceMappingURL=debc9983.js.map
