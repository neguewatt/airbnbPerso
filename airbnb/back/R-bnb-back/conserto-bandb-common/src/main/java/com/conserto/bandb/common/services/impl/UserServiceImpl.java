package com.conserto.bandb.common.services.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.conserto.bandb.common.model.User;
import com.conserto.bandb.common.repositories.UserRepository;
import com.conserto.bandb.common.services.UserService;

@Named
@Transactional(TxType.REQUIRED)
public class UserServiceImpl implements UserService {

	@Inject
	private UserRepository repository;

	@Inject
	@Lazy
	private PasswordEncoder passwordEncoder;

	@Override
	public User create(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return repository.saveAndFlush(user);
	}

	@Override
	public User find(Long id) {
		return repository.getOne(id);
	}

	@Override
	public List<User> findAll() {
		return repository.findAll();
	}

	@Override
	public User update(User user) {
		return repository.save(user);
	}

	@Override
	public void delete(Long id) {
		throw new UnsupportedOperationException();
	}

}
