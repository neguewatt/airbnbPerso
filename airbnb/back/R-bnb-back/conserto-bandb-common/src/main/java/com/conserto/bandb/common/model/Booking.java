package com.conserto.bandb.common.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "BOOKING")
public class Booking extends BAndBEntity implements Serializable {

	private static final long serialVersionUID = -245874753753754867L;

	// Attributs
	@NotNull
	@Basic(optional = false)
	@Column(name = "START_DATE", nullable = false)
	private LocalDate startDate;

	@NotNull
	@Basic(optional = false)
	@Column(name = "END_DATE", nullable = false)
	private LocalDate endDate;

	@NotNull
	@Enumerated(EnumType.STRING)
	@Basic(optional = false)
	@Column(name = "STATUS", nullable = false)
	private BookingStatus status;

	@ManyToMany
	@JoinTable(name = "BEDDING_BOOKING", joinColumns = @JoinColumn(name = "BOOKING_ID"), inverseJoinColumns = @JoinColumn(name = "BEDDING_ID"))
	private Set<Bedding> beddings;

	@NotNull
	@OneToOne(optional = false)
	@JoinColumn(name = "BOOKING_AUTHOR_ID", nullable = false)
	private User bookingAuthor;

	// Getters Setters
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

	public BookingStatus getStatus() {
		return status;
	}

	public void setStatus(BookingStatus status) {
		this.status = status;
	}

	public Set<Bedding> getBeddings() {
		return beddings;
	}

	public void setBeddings(Set<Bedding> beddings) {
		this.beddings = beddings;
	}

	public User getBookingAuthor() {
		return bookingAuthor;
	}

	public void setBookingAuthor(User bookingAuthor) {
		this.bookingAuthor = bookingAuthor;
	}
}
