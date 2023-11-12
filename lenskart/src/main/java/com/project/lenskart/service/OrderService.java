package com.project.lenskart.service;

import java.util.List;

import com.project.lenskart.dto.OrderDTO;
import com.project.lenskart.model.Order;

public interface OrderService {
    List<OrderDTO> getAll();
}
