package com.project.lenskart.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.dto.CustomerDTO;
import com.project.lenskart.dto.ProductDTO;
import com.project.lenskart.dto.UserDTO;
import com.project.lenskart.model.Customer;
import com.project.lenskart.model.Product;
import com.project.lenskart.model.User;
import com.project.lenskart.repository.ProductRepository;
import com.project.lenskart.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<ProductDTO> getAll() {
        Iterable<Product> iterable = productRepository.findAll();
        List<ProductDTO> products = new ArrayList<>();

        iterable.forEach(product -> {
            products.add(modelMapper.map(product, ProductDTO.class));
        });
        return products;
    }

    @Override
    public ProductDTO save(ProductDTO productDTO) {
        Product entity = modelMapper.map(productDTO, Product.class);
        entity = productRepository.save(entity);

        return modelMapper.map(entity, ProductDTO.class);
    }

    @Override
    public ProductDTO deleteById(Integer id) {
        return null;
    }

    @Override
    public ProductDTO getById(Integer id) throws Exception {
        Optional<Product> product = productRepository.findById(id);

        if (!product.isPresent()) {
            throw new Exception("Product not found");
        }

        return modelMapper.map(product.get(), ProductDTO.class);

    }
}
