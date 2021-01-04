describe('display single product', () => {
  it('should show the product details', () => {
    const backpack = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
    const tshirt = 'Mens Casual Premium Slim Fit T-Shirts ';
    const jacket = 'Mens Cotton Jacket';

    cy.server({ force404: true }); // Force 404 response if the call is not mocked in Cypress

    cy.route({
      method: 'GET',
      url: 'https://fakestoreapi.com/products/1',
      response: {
        id: 1,
        title: backpack,
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'men clothing',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
      }
    });

    cy.route({
      method: 'GET',
      url: 'https://fakestoreapi.com/products/2',
      response: {
        id: 2,
        title: tshirt,
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: 'men clothing',
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
      }
    });

    cy.route({
      method: 'GET',
      url: 'https://fakestoreapi.com/products/3',
      response: {
        id: 3,
        title: jacket,
        price: 55.99,
        description:
          'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: 'men clothing',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
      }
    });

    cy.visit('/product/1');
    cy.contains(backpack);
    cy.visit('/product/2');
    cy.contains(tshirt);
    cy.visit('/product/3');
    cy.contains(jacket);
  });
});
