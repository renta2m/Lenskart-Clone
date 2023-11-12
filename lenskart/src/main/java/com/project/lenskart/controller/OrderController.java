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
import com.project.lenskart.service.OrderService;

@RestController
@RequestMapping("order")
public class OrderController {
    @Autowired
    private OrderService orderService;

//    @PostMapping("/create")
//    public OrderDTO create(@RequestBody OrderDTO order) {
//        return orderService.create(order);
//    }
//
    @GetMapping("/all")
    public List<OrderDTO> getAll() {
        return orderService.getAll();
    }
//
//    @GetMapping("/{id}")
//    public OrderDTO getById(@PathVariable Integer id) {
//        return orderService.getById(id);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteById(@PathVariable Integer id) {
//        orderService.deleteById(id);
//    }
}
