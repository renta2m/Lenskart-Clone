package com.project.lenskart.service.impl;

import java.util.Date;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.dto.CustomerDTO;
import com.project.lenskart.dto.UserDTO;
import com.project.lenskart.model.Customer;
import com.project.lenskart.model.User;
import com.project.lenskart.repository.CustomerRepository;
import com.project.lenskart.repository.UserRepository;
import com.project.lenskart.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO login(UserDTO userDTO) throws Exception {

        User user = this.userRepository.findByUserIdAndPassword(userDTO.getUserId(), userDTO.getPassword());

        if (user == null) {
            throw new Exception("user does not exist");
        }

        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public UserDTO save(UserDTO userDTO) {
        User entity = modelMapper.map(userDTO, User.class);
        entity = userRepository.save(entity);

        return modelMapper.map(entity, UserDTO.class);
    }

    @Override
    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        if (customerDTO.getId() == null) {
            customerDTO.setCreatedDate(new Date());
        }

        customerDTO.setLastUpdatedDate(new Date());
        Customer entity = modelMapper.map(customerDTO, Customer.class);
        entity = customerRepository.save(entity);

        return modelMapper.map(entity, CustomerDTO.class);
    }

    @Override
    public CustomerDTO getCustomerById(Integer id) throws Exception {
        Optional<Customer> customer = customerRepository.findById(id);

        if (!customer.isPresent()) {
            throw new Exception("Customer not found");
        }

        return modelMapper.map(customer.get(), CustomerDTO.class);
    }
}
