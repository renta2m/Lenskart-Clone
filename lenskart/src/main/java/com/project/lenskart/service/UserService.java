package com.project.lenskart.service;

import com.project.lenskart.dto.UserDTO;

public interface UserService {
    UserDTO customerLogin(UserDTO user) throws Exception;

    UserDTO employeeLogin(UserDTO user) throws Exception;
}
