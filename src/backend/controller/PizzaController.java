package com.pizzaplatform.controller;

import com.pizzaplatform.model.Ingredient;
import com.pizzaplatform.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PizzaController {
    
    @Autowired
    private IngredientRepository ingredientRepository;
    
    @GetMapping("/ingredients")
    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }
    
    @PostMapping("/orders")
    public void createOrder(@RequestBody OrderRequest orderRequest) {
        // Logique de traitement de la commande
        // À implémenter selon vos besoins
    }
}