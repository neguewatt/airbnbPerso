package com.conserto.bandb.web.handler;

import java.util.List;

import com.conserto.bandb.swagger.dto.LodgingDTO;
import com.conserto.bandb.swagger.dto.LodgingParameterDTO;
import com.conserto.bandb.swagger.dto.PageableDTO;
import com.conserto.bandb.web.dto.PageResultsDTO;

public interface LodgingHandler {

	List<LodgingDTO> getAllLodgings();

	List<LodgingDTO> getAllLodgingsByAddress(String address);

	PageResultsDTO<LodgingDTO> getLodgingsByOwnerId(Long ownerId, PageableDTO pageable);

	LodgingDTO createLodging(LodgingParameterDTO lodgingDTO, Long userId);

	LodgingDTO updateLodging(LodgingDTO lodgingDTO);

	void deleteLodging(Long id);

}
