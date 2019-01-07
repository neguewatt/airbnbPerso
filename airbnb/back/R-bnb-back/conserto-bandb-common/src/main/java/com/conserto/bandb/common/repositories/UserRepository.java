package com.conserto.bandb.common.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.conserto.bandb.common.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmailAddress(String emailAddress);

	User findByFirstName(String firstName);

	User findByLastName(String lastName);
}