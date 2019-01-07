package com.conserto.bandb.common.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.conserto.bandb.common.model.Lodging;

@Repository
public interface LodgingRepository extends JpaRepository<Lodging, Long> {
	Page<Lodging> findByOwnerId(Long ownerId, Pageable pageable);

	List<Lodging> findByAddressStreet(String street);
}
