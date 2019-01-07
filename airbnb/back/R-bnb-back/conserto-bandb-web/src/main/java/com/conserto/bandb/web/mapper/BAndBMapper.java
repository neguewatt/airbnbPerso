package com.conserto.bandb.web.mapper;

import java.util.Collection;
import java.util.List;

import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.data.domain.Page;

import com.conserto.bandb.common.model.BAndBEntity;
import com.conserto.bandb.swagger.dto.BAndBDTO;
import com.conserto.bandb.swagger.dto.PageDTO;
import com.conserto.bandb.web.dto.PageResultsDTO;

public interface BAndBMapper<E extends BAndBEntity, D extends BAndBDTO> {

	D mapEntity(E entity);

	List<D> mapEntities(Collection<E> entities);

	default PageResultsDTO<D> mapPageResults(Page<E> pageResults) {
		PageResultsDTO<D> pageResultsDTO = new PageResultsDTO<>();
		PageDTO pageDTO = new PageDTO();
		pageDTO.setTotalElements(pageResults.getTotalElements());
		pageDTO.setTotalPages(pageResults.getTotalPages());
		pageResultsDTO.setPage(pageDTO);
		pageResultsDTO.setResults(mapEntities(pageResults.getContent()));
		return pageResultsDTO;
	}

	E mapDTO(D dto);

	List<E> mapDTOs(Collection<D> dtos);

	@Mapping(target = "id", ignore = true)
	@Mapping(target = "createdAt", ignore = true)
	@Mapping(target = "updatedAt", ignore = true)
	E updateEntity(@MappingTarget E entity, D dto);

}
