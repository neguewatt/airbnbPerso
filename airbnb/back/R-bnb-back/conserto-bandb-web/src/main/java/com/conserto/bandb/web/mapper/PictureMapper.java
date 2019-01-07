package com.conserto.bandb.web.mapper;

import org.mapstruct.Mapper;

import com.conserto.bandb.common.model.Picture;
import com.conserto.bandb.swagger.dto.PictureDTO;
import com.conserto.bandb.swagger.dto.PictureParameterDTO;

@Mapper(componentModel = "spring")
public interface PictureMapper extends BAndBMapper<Picture, PictureDTO> {

	Picture mapParameter(PictureParameterDTO pictureParameterDTO);

}
