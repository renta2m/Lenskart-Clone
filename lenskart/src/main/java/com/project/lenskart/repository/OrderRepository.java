package com.project.lenskart.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Order;

public interface OrderRepository extends CrudRepository<Order, Integer> {
    List<Order> findByCustomerId(Integer id);

    List<Order> findAllByOrderByIdDesc();
}
