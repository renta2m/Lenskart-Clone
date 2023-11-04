package com.project.lenskart.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.lenskart.model.Review;

public interface ReviewRepository extends CrudRepository<Review, Integer> {
}
