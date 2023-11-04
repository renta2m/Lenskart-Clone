package com.project.lenskart.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
