package com.project.lenskart.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.dto.EmployeeDTO;
import com.project.lenskart.dto.OrderDTO;
import com.project.lenskart.model.Employee;
import com.project.lenskart.model.Order;
import com.project.lenskart.repository.OrderRepository;
import com.project.lenskart.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<OrderDTO> getAll() {
        Iterable<Order> iterable = orderRepository.findAll();
        List<OrderDTO> orders = new ArrayList<>();

        iterable.forEach(order -> {
            orders.add(modelMapper.map(order, OrderDTO.class));
        });
        return orders;
    }

    @Override
    public OrderDTO createOrder(OrderDTO order) {
        Order orderEntity = modelMapper.map(order, Order.class);
        orderRepository.save(orderEntity);

        return modelMapper.map(order, OrderDTO.class);
    }

    @Override
    public OrderDTO getById(Integer id) throws Exception {
        Optional<Order> orderEntity = orderRepository.findById(id);

        if (orderEntity.isEmpty()) {
            throw new Exception("order not found");
        }

        return modelMapper.map(orderEntity.get(), OrderDTO.class);
    }
}
