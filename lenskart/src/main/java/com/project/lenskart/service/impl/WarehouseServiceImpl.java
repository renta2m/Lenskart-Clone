package com.project.lenskart.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lenskart.dto.WarehouseDTO;

import com.project.lenskart.model.Warehouse;
import com.project.lenskart.repository.ReviewRepository;
import com.project.lenskart.repository.WarehouseRepository;
import com.project.lenskart.service.WarehouseService;

@Service
public class WarehouseServiceImpl implements WarehouseService {

    @Autowired
    private WarehouseRepository warehouseRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<WarehouseDTO> getAll() {
        List<Warehouse> list = warehouseRepository.findAllByOrderByIdDesc();
        List<WarehouseDTO> warehouses = new ArrayList<>();

        list.forEach(warehouse -> {
            warehouses.add(modelMapper.map(warehouse, WarehouseDTO.class));
        });
        return warehouses;
    }

    @Override
    public WarehouseDTO save(WarehouseDTO warehouseDTO) {
        Warehouse entity = modelMapper.map(warehouseDTO, Warehouse.class);
        entity = warehouseRepository.save(entity);

        return modelMapper.map(entity, WarehouseDTO.class);
    }

    @Override
    public WarehouseDTO getById(Integer id) throws Exception {
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);

        if (!warehouse.isPresent()) {
            throw new Exception("Product not found");
        }

        return modelMapper.map(warehouse.get(), WarehouseDTO.class);
    }
}
