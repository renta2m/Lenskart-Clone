package com.project.lenskart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.lenskart.dto.CustomerDTO;
import com.project.lenskart.dto.UserDTO;
import com.project.lenskart.model.User;
import com.project.lenskart.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public UserDTO login(@RequestBody UserDTO user) throws Exception{
        return this.userService.login(user);
    }

    @PostMapping("/save")
    public UserDTO save(@RequestBody UserDTO user) {
        return this.userService.save(user);
    }

    @PostMapping("/customer/create")
    public CustomerDTO createCustomer(@RequestBody CustomerDTO customer) {
        return this.userService.createCustomer(customer);
    }

    @GetMapping("/customer/{id}")
    public CustomerDTO getCustomerById(@PathVariable Integer id) throws Exception {
        return this.userService.getCustomerById(id);
    }
}
