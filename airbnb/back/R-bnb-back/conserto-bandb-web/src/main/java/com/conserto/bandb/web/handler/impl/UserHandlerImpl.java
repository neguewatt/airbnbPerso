package com.conserto.bandb.web.handler.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.conserto.bandb.common.model.User;
import com.conserto.bandb.common.services.UserService;
import com.conserto.bandb.swagger.dto.UserDTO;
import com.conserto.bandb.swagger.dto.UserParameterDTO;
import com.conserto.bandb.web.handler.UserHandler;
import com.conserto.bandb.web.mapper.UserMapper;

@Named
public class UserHandlerImpl implements UserHandler {

	@Inject
	private UserService userService;

	@Inject
	private UserMapper userMapper;

	@Override
	public UserDTO createUser(UserParameterDTO userDTO) {
		User user = userMapper.mapParameter(userDTO);
		user = userService.create(user);
		return userMapper.mapEntity(user);
	}

	@Override
	public List<UserDTO> getAllUsers() {
		List<User> users = userService.findAll();
		return userMapper.mapEntities(users);
	}

	@Override
	public UserDTO getUserById(Long id) {
		User user = userService.find(id);
		return userMapper.mapEntity(user);
	}

	@Override
	public UserDTO updateUser(UserDTO userDTO) {
		User user = userService.find(userDTO.getId());
		user = userMapper.updateEntity(user, userDTO);
		user = userService.update(user);
		return userMapper.mapEntity(user);
	}

}
