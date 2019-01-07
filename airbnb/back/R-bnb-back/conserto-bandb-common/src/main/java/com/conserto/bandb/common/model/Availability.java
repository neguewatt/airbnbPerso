package com.conserto.bandb.common.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "AVAILABILITY")
public class Availability extends BAndBEntity implements Serializable {

	private static final long serialVersionUID = -7069405258247052213L;

	// Attributs
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "BEDDING_ID", nullable = false)
	private Bedding bedding;

	@NotNull
	@Basic(optional = false)
	@Column(name = "START_DATE", nullable = false)
	private LocalDate startDate;

	@NotNull
	@Basic(optional = false)
	@Column(name = "END_DATE", nullable = false)
	private LocalDate endDate;

	// Getters Setters
	public Bedding getBedding() {
		return bedding;
	}

	public void setBedding(Bedding bedding) {
		this.bedding = bedding;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
}
