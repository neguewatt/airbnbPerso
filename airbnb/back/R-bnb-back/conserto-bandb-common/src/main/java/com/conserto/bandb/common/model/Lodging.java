package com.conserto.bandb.common.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "LODGING")
public class Lodging extends BAndBEntity implements Serializable {

	private static final long serialVersionUID = 9140424940297637520L;

	// Attributs
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "OWNER_ID", nullable = false)
	private User owner;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "TITLE", nullable = false)
	private String title;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "DESCRIPTION", nullable = false)
	private String description;

	@NotNull
	@OneToOne(optional = false)
	@JoinColumn(name = "ADDRESS_ID", nullable = false)
	private Address address;

	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "MAIN_PICTURE_ID", nullable = false)
	private Picture mainPicture;

	@OneToMany(fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
	@JoinTable(name = "LODGING_PICTURE", joinColumns = @JoinColumn(name = "LODGING_ID"), inverseJoinColumns = @JoinColumn(name = "PICTURE_ID"))
	private Set<Picture> pictures;

	// faire idem pour les bedding ---> relation

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Picture getMainPicture() {
		return mainPicture;
	}

	public void setMainPicture(Picture mainPicture) {
		this.mainPicture = mainPicture;
	}

	public Set<Picture> getPictures() {
		return pictures;
	}

	public void setPictures(Set<Picture> pictures) {
		this.pictures = pictures;
	}
}
