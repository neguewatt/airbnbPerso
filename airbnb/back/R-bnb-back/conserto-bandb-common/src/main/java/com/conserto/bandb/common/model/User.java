package com.conserto.bandb.common.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "USER", uniqueConstraints = @UniqueConstraint(columnNames = "EMAIL_ADDRESS"))
public class User extends BAndBEntity implements Serializable, UserDetails {

	private static final long serialVersionUID = -6849862100171660477L;

	// Attributs
	@NotBlank
	@Basic(optional = false)
	@Column(name = "FIRST_NAME", nullable = false)
	private String firstName;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "LAST_NAME", nullable = false)
	private String lastName;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "EMAIL_ADDRESS", nullable = false, unique = true)
	private String emailAddress;

	@NotBlank
	@Basic(fetch = FetchType.LAZY, optional = false)
	@Column(name = "PASSWORD", nullable = false)
	private String password;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ADDRESS_ID")
	private Address address;

	@Basic(fetch = FetchType.LAZY)
	@Column(name = "BIRTHDAY")
	private LocalDate birthday;

	public User() {
		super();
	}

	public User(String emailAddress, String password, List<GrantedAuthority> authorities) {
		// TODO Auto-generated constructor stub

		super();
		this.getAuthorities().addAll(authorities);
		this.emailAddress = emailAddress;
		this.password = password;

	}

	// Getters Setters
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getBirthday() {
		return birthday;
	}

	public void setBirthday(LocalDate birthday) {
		this.birthday = birthday;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public List<GrantedAuthority> getAuthorities() {

		List<GrantedAuthority> aut = new ArrayList<>();
		aut.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		return aut;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return getEmailAddress();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
