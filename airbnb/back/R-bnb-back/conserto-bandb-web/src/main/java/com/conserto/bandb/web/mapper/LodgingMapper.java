package com.conserto.bandb.web.mapper;

import org.mapstruct.Mapper;

import com.conserto.bandb.common.model.Lodging;
import com.conserto.bandb.swagger.dto.LodgingDTO;
import com.conserto.bandb.swagger.dto.LodgingParameterDTO;

@Mapper(componentModel = "spring", uses = { AddressMapper.class, PictureMapper.class })
public interface LodgingMapper extends BAndBMapper<Lodging, LodgingDTO> {

	Lodging mapParameter(LodgingParameterDTO lodgingDTO);
}