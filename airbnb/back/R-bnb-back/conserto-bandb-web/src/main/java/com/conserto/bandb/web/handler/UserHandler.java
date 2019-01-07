package com.conserto.bandb.web.handler;

import java.util.List;

import com.conserto.bandb.swagger.dto.UserDTO;
import com.conserto.bandb.swagger.dto.UserParameterDTO;

public interface UserHandler {

	UserDTO createUser(UserParameterDTO userDTO);

	List<UserDTO> getAllUsers();

	UserDTO updateUser(UserDTO userDTO);

	UserDTO getUserById(Long id);

}
