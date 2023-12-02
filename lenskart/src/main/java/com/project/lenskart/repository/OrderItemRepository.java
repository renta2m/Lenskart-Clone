package com.project.lenskart.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.OrderItem;
import com.project.lenskart.model.OrderItemPkId;

public interface OrderItemRepository extends CrudRepository<OrderItem, OrderItemPkId> {
}
