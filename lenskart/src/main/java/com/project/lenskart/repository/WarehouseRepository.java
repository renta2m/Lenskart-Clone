package com.project.lenskart.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Employee;
import com.project.lenskart.model.Warehouse;

public interface WarehouseRepository extends CrudRepository<Warehouse, Integer> {
    List<Warehouse> findAllByOrderByIdDesc();
}
