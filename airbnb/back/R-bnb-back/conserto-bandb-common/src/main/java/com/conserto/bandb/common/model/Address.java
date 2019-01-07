package com.conserto.bandb.common.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "ADDRESS")
public class Address extends BAndBEntity implements Serializable {

	private static final long serialVersionUID = -7867806976832291160L;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "STREET", nullable = false)
	private String street;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "CITY", nullable = false)
	private String city;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "POSTAL_CODE", nullable = false)
	private String postalCode;

	@Transient
	private String completeAddress;

	@Basic
	@Column(name = "REGION")
	private String region;

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCompleteAddress() {
		return this.street + ", " + this.postalCode + ", " + this.city;
	}

	public void setCompleteAddress(String completeAddress) {
		this.completeAddress = completeAddress;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}
}
