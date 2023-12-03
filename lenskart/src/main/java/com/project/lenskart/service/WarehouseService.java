package com.project.lenskart.service;

import java.util.List;

import com.project.lenskart.dto.WarehouseDTO;

public interface WarehouseService {
    List<WarehouseDTO> getAll();

    WarehouseDTO save(WarehouseDTO warehouseDTO);

    WarehouseDTO getById(Integer id) throws Exception;
}
