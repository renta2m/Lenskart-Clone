package com.project.lenskart.service;

import com.project.lenskart.dto.CustomerDTO;
import com.project.lenskart.dto.UserDTO;

public interface UserService {
    UserDTO login(UserDTO user) throws Exception;

    UserDTO save(UserDTO user);

    CustomerDTO createCustomer(CustomerDTO customerDTO);

    CustomerDTO getCustomerById(Integer id) throws Exception;

}
