package com.conserto.bandb.common.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "BEDDING")
public class Bedding extends BAndBEntity implements Serializable {

	private static final long serialVersionUID = -7036907637868267066L;

	@NotNull
	@Enumerated(EnumType.STRING)
	@Basic(optional = false)
	@Column(name = "SIZE", nullable = false, updatable = false)
	private BeddingSize size;

	@NotNull
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "LODGING_ID", nullable = false, updatable = false)
	private Lodging lodging;

	public BeddingSize getSize() {
		return size;
	}

	public void setSize(BeddingSize size) {
		this.size = size;
	}

	public Lodging getLodging() {
		return lodging;
	}

	public void setLodging(Lodging lodging) {
		this.lodging = lodging;
	}

}
