package com.sambalpuribazaar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sambalpuribazaar.entity.User;
import com.sambalpuribazaar.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void createUser(User user){
        userRepository.save(user);
    }

    public List<User> getAllUser(){
        return
         userRepository.findAll();
    }

    public User getUserById(String id){
        User user = userRepository.findById(id).orElse(null);
        if(user != null){
            return user;
        }
        return null;
    }


}
