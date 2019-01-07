package com.conserto.bandb.common.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.conserto.bandb.common.model.User;
import com.conserto.bandb.common.repositories.UserRepository;

/*
 * Obtention des détails de l'utilisateur
 */
@Service
public class BAndBUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByEmailAddress(username);

		if (user == null) {
			throw new UsernameNotFoundException("User " + username + " not found");
		}

		return user;

	}
}