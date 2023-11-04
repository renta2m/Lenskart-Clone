package com.project.lenskart.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUserIdAndPassword(String loginId, String password);
    Boolean existsByUserId(String loginId);
    User findByUserId(String email);

}
