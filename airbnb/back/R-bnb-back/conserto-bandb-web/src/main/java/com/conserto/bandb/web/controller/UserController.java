package com.conserto.bandb.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conserto.bandb.swagger.api.UsersApi;
import com.conserto.bandb.swagger.dto.UserDTO;
import com.conserto.bandb.swagger.dto.UserParameterDTO;
import com.conserto.bandb.web.handler.UserHandler;

@RestController
@RequestMapping("/api/users")
public class UserController implements UsersApi {

	@Autowired
	private UserHandler userHandler;

	// Get All Users
	@Override
	@GetMapping
	public ResponseEntity<List<UserDTO>> getAllUsers() {
		return new ResponseEntity<List<UserDTO>>(userHandler.getAllUsers(), HttpStatus.OK);
	}

	// Create a new User
	@Override
	@PostMapping
	public ResponseEntity<UserDTO> createUser(@RequestBody UserParameterDTO userDTO) {
		return new ResponseEntity<UserDTO>(userHandler.createUser(userDTO), HttpStatus.CREATED);
	}

	// Update a User
	@Override
	@PutMapping
	public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO) {
		return new ResponseEntity<UserDTO>(userHandler.updateUser(userDTO), HttpStatus.OK);
	}

	@Override
	@GetMapping
	@RequestMapping(value = "/{id}")
	public ResponseEntity<UserDTO> getUserId(@PathVariable("id") Long id) {
		return new ResponseEntity<UserDTO>(userHandler.getUserById(id), HttpStatus.OK);
	}

}
