package com.sambalpuribazaar.service;

import java.util.List;

import com.sambalpuribazaar.dto.ProductDTO;
import com.sambalpuribazaar.entity.Product;

public interface ProductService {
    
    public Product addProduct(ProductDTO product);

    public List<Product> getAllProduct();
    
    public Product getProductById(String id);

}
