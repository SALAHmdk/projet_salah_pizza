export const mockIngredients = [
    { id: 1, name: 'Sauce Tomate', price: 1.00, category: 'Base' },
    { id: 2, name: 'Mozzarella', price: 2.00, category: 'Fromage' },
    { id: 3, name: 'Jambon', price: 2.50, category: 'Viande' },
    { id: 4, name: 'Champignons', price: 1.50, category: 'Légume' },
    { id: 5, name: 'Olives', price: 1.00, category: 'Légume' },
    { id: 6, name: 'Pepperoni', price: 3.00, category: 'Viande' },
    { id: 7, name: 'Oignons', price: 1.00, category: 'Légume' },
    { id: 8, name: 'Poivrons', price: 1.50, category: 'Légume' }
];

export const predefinedPizzas = [
    {
        id: 1,
        name: 'Margherita',
        price: 12.50,
        image: '/src/assets/pizzas/margherita.jpg',
        ingredients: [1, 2], // Sauce tomate, Mozzarella
        description: 'La classique italienne avec sauce tomate et mozzarella'
    },
    {
        id: 2,
        name: 'Reine',
        price: 14.50,
        image: '/src/assets/pizzas/reine.jpg',
        ingredients: [1, 2, 3, 4], // Sauce tomate, Mozzarella, Jambon, Champignons
        description: 'La favorite de tous avec jambon et champignons'
    },
    {
        id: 3,
        name: 'Pepperoni',
        price: 15.50,
        image: '/src/assets/pizzas/pepperoni.jpg',
        ingredients: [1, 2, 6], // Sauce tomate, Mozzarella, Pepperoni
        description: 'Pour les amateurs de piquant'
    },
    {
        id: 4,
        name: 'Végétarienne',
        price: 13.50,
        image: '/src/assets/pizzas/vegetarienne.jpg',
        ingredients: [1, 2, 4, 5, 7, 8], // Sauce tomate, Mozzarella, Champignons, Olives, Oignons, Poivrons
        description: '100% légumes frais'
    }
];