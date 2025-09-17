package com.sambalpuribazaar.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sambalpuribazaar.dto.ProductDTO;
import com.sambalpuribazaar.entity.Product;
import com.sambalpuribazaar.repository.ProductRepository;

@Service
public class ProductserviceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;
    

    @Override
    public Product addProduct(Product product) {
        product.setCreatedAt(LocalDateTime.now());
        return productRepository.save( product);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }
    
    private Product createProduct(ProductDTO productDto){
        Product product = new Product();
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setNewarrival(productDto.isNewarrival());

        return null;
    }
}
