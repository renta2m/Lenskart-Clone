package com.project.lenskart.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    Customer findByEmailAndPassword(String loginId, String password);
    Boolean existsByEmail(String loginId);
    Customer findByEmail(String email);
    List<Customer> findAllByOrderByIdDesc();
}
