package com.example.SpotifyApplication.services;

import com.example.SpotifyApplication.domain.Song;
import com.example.SpotifyApplication.domain.User;
import com.example.SpotifyApplication.exception.UserAlreadyException;
import com.example.SpotifyApplication.proxy.UserProxy;
import com.example.SpotifyApplication.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class IUserServiceIMPL implements IUserServices{

    IUserRepository iUserRepository;
    UserProxy userProxy;
    @Autowired
    public IUserServiceIMPL(IUserRepository iUserRepository, UserProxy userProxy) {
        this.iUserRepository = iUserRepository;
        this.userProxy = userProxy;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyException{
        if(iUserRepository.findById(user.getEmail()).isEmpty()) {
            userProxy.registerUser(user);
            return iUserRepository.save(user);

        }
       throw new UserAlreadyException();
    }
    @Override
    public User getUser(String email) {
        return iUserRepository.findById(email).get();
    }
    @Override
    public List<Song> getPlaylist(String email) {
        User use=iUserRepository.findById(email).get();
        return use.getPlaylist();
    }

    @Override
    public boolean addSongToPlayist(String email, Song song) {
        return false;
    }
}
