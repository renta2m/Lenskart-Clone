package com.project.lenskart.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
}
