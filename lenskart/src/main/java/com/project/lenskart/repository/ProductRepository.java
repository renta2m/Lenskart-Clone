package com.project.lenskart.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Employee;
import com.project.lenskart.model.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {
    List<Product> findAllByOrderByIdDesc();
}
