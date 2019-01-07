package com.conserto.bandb.common.services;

import java.util.List;

import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import com.conserto.bandb.common.model.BAndBEntity;

@Transactional(TxType.REQUIRED)
public interface BAndBCRUDService<E extends BAndBEntity> {

	E create(E entity);

	E find(Long id);

	List<E> findAll();

	E update(E entity);

	void delete(Long id);
}
