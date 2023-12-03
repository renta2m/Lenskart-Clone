package com.project.lenskart.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.lenskart.dto.OrderDTO;
import com.project.lenskart.dto.OrderItemDTO;
import com.project.lenskart.service.OrderService;

@RestController
@RequestMapping("order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public OrderDTO create(@RequestBody OrderDTO order) {
        return orderService.createOrder(order);
    }

    @GetMapping("/all")
    public List<OrderDTO> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/{id}")
    public OrderDTO getById(@PathVariable Integer id) throws Exception {
        return orderService.getById(id);
    }

    @GetMapping("/customer/{id}")
    public List<OrderDTO> findByCustomer(@PathVariable Integer id) throws Exception {
        return orderService.findByCustomer(id);
    }

    @PostMapping("/update-status")
    public void updateStatus(@RequestBody OrderItemDTO orderItemDTO) throws Exception {
        orderService.updateOrderItem(orderItemDTO);
    }
}
