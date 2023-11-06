package com.project.lenskart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.lenskart.dto.UserDTO;
import com.project.lenskart.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/cust-login")
    public UserDTO customerLogin(@RequestBody UserDTO user) throws Exception{
        return this.userService.customerLogin(user);
    }

    @PostMapping("/emp-login")
    public UserDTO empLogin(@RequestBody UserDTO user) throws Exception{
        return this.userService.employeeLogin(user);
    }
}
