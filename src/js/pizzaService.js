import { mockIngredients, predefinedPizzas } from './mockData.js';

export class PizzaService {
    /**
     * Récupère les ingrédients disponibles.
     * Simule une requête API avec un délai.
     */
    async getIngredients() {
        // Simuler un délai d'API
        await new Promise(resolve => setTimeout(resolve, 100));
        return mockIngredients;
    }

    /**
     * Récupère les pizzas pré-définies.
     * Simule une requête API avec un délai.
     */
    async getPredefinedPizzas() {
        // Simuler un délai d'API
        await new Promise(resolve => setTimeout(resolve, 100));
        return predefinedPizzas;
    }

    /**
     * Simule la création d'une commande.
     * @param {Object} order - La commande contenant les ingrédients et le prix total.
     * @returns {Promise<Object>} - Résultat de la commande avec un ID unique.
     */
    async createOrder(order) {
        console.log('Envoi de la commande:', order);
        // Simuler un délai d'API
        await new Promise(resolve => setTimeout(resolve, 300));
        return { success: true, orderId: Math.floor(Math.random() * 1000) };
    }
}
