package com.conserto.bandb.common.services.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.conserto.bandb.common.model.Lodging;
import com.conserto.bandb.common.repositories.LodgingRepository;
import com.conserto.bandb.common.services.AddressService;
import com.conserto.bandb.common.services.LodgingService;

@Named
@Transactional(TxType.REQUIRED)
public class LodgingServiceImpl implements LodgingService {

	@Inject
	private LodgingRepository repository;

	@Inject
	private AddressService addressService;

	@Override
	public Lodging create(Lodging lodging) {
		lodging.setAddress(addressService.create(lodging.getAddress()));
		return repository.save(lodging);
	}

	@Override
	public Lodging find(Long id) {
		return repository.getOne(id);
	}

	@Override
	public List<Lodging> findAll() {
		return repository.findAll();
	}

	@Override
	public List<Lodging> findAllByAddress(String address) {
		return repository.findByAddressStreet(address);
	}

	@Override
	public Page<Lodging> findByOwnerId(Long ownerId, Pageable pageable) {
		return repository.findByOwnerId(ownerId, pageable);
	}

	@Override
	public Lodging update(Lodging lodging) {
		return repository.save(lodging);
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

}
