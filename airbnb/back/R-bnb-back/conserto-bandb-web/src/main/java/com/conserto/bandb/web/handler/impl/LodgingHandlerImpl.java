package com.conserto.bandb.web.handler.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.conserto.bandb.common.model.Lodging;
import com.conserto.bandb.common.model.User;
import com.conserto.bandb.common.services.LodgingService;
import com.conserto.bandb.common.services.UserService;
import com.conserto.bandb.swagger.dto.LodgingDTO;
import com.conserto.bandb.swagger.dto.LodgingParameterDTO;
import com.conserto.bandb.swagger.dto.PageableDTO;
import com.conserto.bandb.web.dto.PageResultsDTO;
import com.conserto.bandb.web.handler.LodgingHandler;
import com.conserto.bandb.web.mapper.LodgingMapper;

@Named
public class LodgingHandlerImpl implements LodgingHandler {

	@Inject
	private LodgingService lodgingService;

	@Inject
	private UserService userService;

	@Inject
	private LodgingMapper lodgingMapper;

	@Override
	public List<LodgingDTO> getAllLodgings() {
		List<Lodging> lodgings = lodgingService.findAll();
		return lodgingMapper.mapEntities(lodgings);
	}

	@Override
	public List<LodgingDTO> getAllLodgingsByAddress(String address) {
		List<Lodging> lodgings = lodgingService.findAllByAddress(address);
		return lodgingMapper.mapEntities(lodgings);
	}

	@Override
	public PageResultsDTO<LodgingDTO> getLodgingsByOwnerId(Long ownerId, PageableDTO pageableDTO) {
		Pageable pageable = PageRequest.of(pageableDTO.getPageNumber(), pageableDTO.getPageSize());
		Page<Lodging> lodgings = lodgingService.findByOwnerId(ownerId, pageable);
		return lodgingMapper.mapPageResults(lodgings);
	}

	@Override
	public LodgingDTO createLodging(LodgingParameterDTO lodgingDTO, Long userId) {
		Lodging lodging = lodgingMapper.mapParameter(lodgingDTO);
		User owner = userService.find(userId);
		lodging.setOwner(owner);
		lodging = lodgingService.create(lodging);
		return lodgingMapper.mapEntity(lodging);
	}

	@Override
	public LodgingDTO updateLodging(LodgingDTO lodgingDTO) {
		Lodging lodging = lodgingService.find(lodgingDTO.getId());
		lodging = lodgingMapper.updateEntity(lodging, lodgingDTO);
		lodging = lodgingService.update(lodging);
		return lodgingMapper.mapEntity(lodging);
	}

	@Override
	public void deleteLodging(Long id) {
		lodgingService.delete(id);
	}

}
