describe('display single product', () => {
  const jacket = 'Mens Cotton Jacket';

  cy.server({ force404: true }); // Force 404 response if the call is not mocked in Cypress

  cy.route({
    method: 'GET',
    url: 'https://fakestoreapi.com/products/(1|3)',
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
  cy.contains(`Details ${jacket}`);
});
