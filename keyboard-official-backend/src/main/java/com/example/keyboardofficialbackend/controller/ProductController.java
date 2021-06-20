package com.example.keyboardofficialbackend.controller;

import com.example.keyboardofficialbackend.exception.ResourceNotFoundException;
import com.example.keyboardofficialbackend.model.Product;
import com.example.keyboardofficialbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // get all products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // create product rest api
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // get product by id rest api
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getEmployeeById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
        return ResponseEntity.ok(product);
    }

    // update product rest api
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        // retrieve product form database
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

        product.setName(productDetails.getName());
        product.setBrand(productDetails.getBrand());
        product.setQuantity(productDetails.getQuantity());
        product.setPrice(productDetails.getPrice());
        product.setDdl(productDetails.getDdl());
        product.setProgress(productDetails.getProgress());

        // save new product to database
        Product updateProduct = productRepository.save(product);
        return ResponseEntity.ok(updateProduct);
    }

    // delete employee rest api
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable  Long id) {
        // retrieve product form database
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
