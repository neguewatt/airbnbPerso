package com.conserto.bandb.common.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.conserto.bandb.common.model.Lodging;

public interface LodgingService extends BAndBCRUDService<Lodging> {

	List<Lodging> findAllByAddress(String address);

	Page<Lodging> findByOwnerId(Long ownerId, Pageable pageable);

}
