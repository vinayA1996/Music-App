package com.example.SpotifyApplication.services;

import com.example.SpotifyApplication.domain.Song;
import com.example.SpotifyApplication.domain.User;
import com.example.SpotifyApplication.exception.UserAlreadyException;

import java.util.List;

public interface IUserServices {

    public User saveUser(User user)throws UserAlreadyException;
    public User getUser(String email);

    public List<Song> getPlaylist(String email);

    public boolean addSongToPlayist(String email,Song song);

}
