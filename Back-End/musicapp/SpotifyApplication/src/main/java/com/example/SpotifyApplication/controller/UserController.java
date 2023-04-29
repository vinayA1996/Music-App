package com.example.SpotifyApplication.controller;

import com.example.SpotifyApplication.domain.User;
import com.example.SpotifyApplication.exception.UserAlreadyException;
import com.example.SpotifyApplication.services.IUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@RestController
@RequestMapping("spotify/user")
public class UserController {
    IUserServices  iUserServices;
    @Autowired
    public UserController(IUserServices iUserServices) {
        this.iUserServices = iUserServices;
    }


  //  http://localhost:63300/spotify/user/addUser

    @PostMapping("/addUser")
    public ResponseEntity addUser(@RequestBody User user)throws UserAlreadyException {
            try {
                return new ResponseEntity(iUserServices.saveUser(user), HttpStatus.CREATED);
            } catch (UserAlreadyException exception) {
                throw exception;
            }
    }
    @GetMapping("user/{email}")
    public ResponseEntity getUser(@PathVariable String email){
        return  new ResponseEntity<>(iUserServices.getUser(email),HttpStatus.OK)    ;
    }

    //  http://localhost:1817/spotify/user/playlist
    @GetMapping("/playlist")
    public ResponseEntity getPlaylist(HttpServletRequest httpServletRequest){
        String email=(String) httpServletRequest.getAttribute("attr1");
        return  new ResponseEntity<>(iUserServices.getPlaylist(email),HttpStatus.OK)    ;
    }




}
