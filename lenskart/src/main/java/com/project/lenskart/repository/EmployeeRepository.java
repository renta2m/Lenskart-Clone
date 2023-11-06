package com.project.lenskart.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Customer;
import com.project.lenskart.model.Employee;

public interface EmployeeRepository  extends CrudRepository<Employee, Integer> {
    Employee findByEmailAndPassword(String loginId, String password);

}
