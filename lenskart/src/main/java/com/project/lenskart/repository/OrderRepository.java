package com.project.lenskart.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Order;

public interface OrderRepository extends CrudRepository<Order, Integer> {
}
