package com.conserto.bandb.common.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.conserto.bandb.common.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}
