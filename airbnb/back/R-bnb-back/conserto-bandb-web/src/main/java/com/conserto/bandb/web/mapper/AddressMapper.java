package com.conserto.bandb.web.mapper;

import org.mapstruct.Mapper;

import com.conserto.bandb.common.model.Address;
import com.conserto.bandb.swagger.dto.AddressDTO;
import com.conserto.bandb.swagger.dto.AddressParameterDTO;

@Mapper(componentModel = "spring")
public interface AddressMapper extends BAndBMapper<Address, AddressDTO> {

	Address mapParameter(AddressParameterDTO addressDTO);
}
