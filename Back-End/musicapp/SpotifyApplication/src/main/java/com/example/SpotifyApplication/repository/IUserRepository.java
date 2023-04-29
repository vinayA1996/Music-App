package com.example.SpotifyApplication.repository;

import com.example.SpotifyApplication.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IUserRepository extends MongoRepository<User,String> {
}
