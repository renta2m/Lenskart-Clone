package com.project.lenskart.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.constants.Status;
import com.project.lenskart.dto.UserDTO;
import com.project.lenskart.model.Customer;
import com.project.lenskart.model.Employee;
import com.project.lenskart.repository.CustomerRepository;
import com.project.lenskart.repository.EmployeeRepository;
import com.project.lenskart.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO customerLogin(UserDTO userDTO) throws Exception {

        Customer customer = this.customerRepository.findByEmailAndPassword(userDTO.getUserId(), userDTO.getPassword());

        if (customer == null) {
            throw new Exception("customer does not exist");
        }

        userDTO.setPassword(null);
        userDTO.setDesignation("customer");
        userDTO.setId(customer.getId());
        return userDTO;
    }

    public UserDTO employeeLogin(UserDTO userDTO) throws Exception {

        Employee employee = this.employeeRepository.findByEmailAndPassword(userDTO.getUserId(), userDTO.getPassword());

        if (employee == null) {
            throw new Exception("employee does not exist");
        }

        userDTO.setPassword(null);
        userDTO.setDesignation(employee.getDesignation());
        userDTO.setId(employee.getEmployeeID());
        return userDTO;
    }
}
