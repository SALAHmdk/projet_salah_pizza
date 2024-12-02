import { PizzaBuilder } from './pizzaBuilder.js';
import { PizzaService } from './pizzaService.js';
import { predefinedPizzas } from './mockData.js';

document.addEventListener('DOMContentLoaded', () => {
    const pizzaBuilder = new PizzaBuilder();
    const pizzaService = new PizzaService();

    // Navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = {
        predefined: document.getElementById('predefined-pizzas'),
        custom: document.getElementById('pizza-builder')
    };

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            
            // Update navigation buttons
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update sections visibility
            Object.values(sections).forEach(section => section.classList.add('hidden'));
            sections[view].classList.remove('hidden');
        });
    });

    // Initialize predefined pizzas
    const pizzaGrid = document.querySelector('.pizza-grid');
    predefinedPizzas.forEach(pizza => {
        const card = document.createElement('div');
        card.className = 'pizza-card';
        card.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.name}">
            <div class="pizza-card-content">
                <h3>${pizza.name}</h3>
                <p>${pizza.description}</p>
                <p class="price">${pizza.price.toFixed(2)}€</p>
                <button onclick="orderPredefinedPizza(${pizza.id})">Commander</button>
            </div>
        `;
        pizzaGrid.appendChild(card);
    });

    // Initialize custom pizza builder
    pizzaService.getIngredients()
        .then(ingredients => {
            pizzaBuilder.initializeIngredients(ingredients);
        })
        .catch(error => {
            console.error('Erreur lors du chargement des ingrédients:', error);
        });

    // Add global function for ordering predefined pizzas
    window.orderPredefinedPizza = (pizzaId) => {
        const pizza = predefinedPizzas.find(p => p.id === pizzaId);
        if (pizza) {
            pizzaService.createOrder({
                pizzaId: pizza.id,
                totalPrice: pizza.price
            }).then(result => {
                alert(`Commande n°${result.orderId} effectuée avec succès!`);
            }).catch(error => {
                console.error('Erreur lors de la commande:', error);
                alert('Erreur lors de la commande. Veuillez réessayer.');
            });
        }
    };
});