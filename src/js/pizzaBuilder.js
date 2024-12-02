import { PizzaService } from './pizzaService.js';

export class PizzaBuilder {
    constructor() {
        this.service = new PizzaService();
        this.selectedIngredients = new Set();
        this.ingredients = [];
        this.totalPrice = 0;

        this.ingredientsList = document.getElementById('ingredients-list');
        this.selectedIngredientsList = document.getElementById('selected-ingredients');
        this.totalPriceElement = document.getElementById('total-price');
        this.orderButton = document.getElementById('order-btn');

        this.orderButton.addEventListener('click', () => this.handleOrder());
    }

    async initializeIngredients() {
        this.ingredients = await this.service.getIngredients();
        this.renderIngredients();
    }

    renderIngredients() {
        this.ingredientsList.innerHTML = '';
        this.ingredients.forEach(ingredient => {
            const element = document.createElement('div');
            element.className = 'ingredient-item';
            element.textContent = `${ingredient.name} (${ingredient.price.toFixed(2)}€)`;
            element.addEventListener('click', () => this.toggleIngredient(ingredient));
            this.ingredientsList.appendChild(element);
        });
    }

    toggleIngredient(ingredient) {
        if (this.selectedIngredients.has(ingredient)) {
            this.selectedIngredients.delete(ingredient);
        } else {
            this.selectedIngredients.add(ingredient);
        }
        this.updateSummary();
    }

    updateSummary() {
        this.selectedIngredientsList.innerHTML = '';
        this.totalPrice = 8; // Prix de base

        this.selectedIngredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = `${ingredient.name} (${ingredient.price.toFixed(2)}€)`;
            this.selectedIngredientsList.appendChild(li);
            this.totalPrice += ingredient.price;
        });

        this.totalPriceElement.textContent = this.totalPrice.toFixed(2);
    }

    async handleOrder() {
        const order = {
            ingredients: Array.from(this.selectedIngredients).map(i => i.id),
            totalPrice: this.totalPrice
        };

        try {
            const result = await this.service.createOrder(order);
            alert(`Commande n°${result.orderId} effectuée avec succès!`);
            this.selectedIngredients.clear();
            this.updateSummary();
        } catch (error) {
            console.error('Erreur lors de la commande:', error);
            alert('Erreur lors de la commande. Veuillez réessayer.');
        }
    }
}
