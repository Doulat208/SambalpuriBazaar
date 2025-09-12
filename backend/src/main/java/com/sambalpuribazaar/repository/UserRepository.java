package com.sambalpuribazaar.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sambalpuribazaar.entity.User;


@Repository
public interface UserRepository extends MongoRepository<User, String>{
        User findByEmail(String email);
}
