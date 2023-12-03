package com.project.lenskart.service;

import java.util.List;

import com.project.lenskart.dto.OrderDTO;
import com.project.lenskart.dto.OrderItemDTO;

public interface OrderService {
    List<OrderDTO> getAll();

    OrderDTO  createOrder(OrderDTO order);
    void updateOrderItem(OrderItemDTO orderItemDTO) throws Exception;

    OrderDTO getById(Integer id) throws Exception;
    List<OrderDTO> findByCustomer(Integer id) throws Exception;
}
