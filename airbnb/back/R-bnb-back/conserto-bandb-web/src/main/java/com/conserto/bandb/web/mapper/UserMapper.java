package com.conserto.bandb.web.mapper;

import org.mapstruct.Mapper;

import com.conserto.bandb.common.model.User;
import com.conserto.bandb.swagger.dto.UserDTO;
import com.conserto.bandb.swagger.dto.UserParameterDTO;

@Mapper(componentModel = "spring", uses = AddressMapper.class)
public interface UserMapper extends BAndBMapper<User, UserDTO> {

	@Override
	UserDTO mapEntity(User user);

	User mapParameter(UserParameterDTO userDTO);
}