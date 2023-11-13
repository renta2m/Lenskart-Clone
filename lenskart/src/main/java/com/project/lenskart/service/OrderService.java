package com.project.lenskart.service;

import java.util.List;

import com.project.lenskart.dto.OrderDTO;

public interface OrderService {
    List<OrderDTO> getAll();

    OrderDTO  createOrder(OrderDTO order);

    OrderDTO getById(Integer id) throws Exception;
}
