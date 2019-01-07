package com.conserto.bandb.common.services.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import com.conserto.bandb.common.model.Address;
import com.conserto.bandb.common.repositories.AddressRepository;
import com.conserto.bandb.common.services.AddressService;

@Named
@Transactional(TxType.REQUIRED)
public class AddressServiceImpl implements AddressService {

	@Inject
	private AddressRepository repository;

	@Override
	public Address create(Address address) {
		return repository.save(address);
	}

	@Override
	public Address find(Long id) {
		return repository.getOne(id);
	}

	@Override
	public List<Address> findAll() {
		return repository.findAll();
	}

	@Override
	public Address update(Address address) {
		return repository.save(address);
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

}
