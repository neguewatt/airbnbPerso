package com.conserto.bandb.common.model;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@MappedSuperclass
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@EntityListeners(AuditingEntityListener.class)
public abstract class BAndBEntity implements Serializable {

	private static final long serialVersionUID = -6510452843043667902L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "ID", nullable = false, updatable = false)
	private Long id;

	@CreatedDate
	@Column(name = "CREATION_DATE", nullable = false, updatable = false)
	private Instant createdAt;

	@LastModifiedDate
	@Column(name = "MODIFICATION_DATE", nullable = false)
	private Instant updatedAt;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

	public Instant getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Instant updatedAt) {
		this.updatedAt = updatedAt;
	}

	@Override
	public boolean equals(Object obj) {
		final Class<? extends BAndBEntity> myClass = this.getClass();
		final Class<? extends Object> itsClass = obj.getClass();
		if (!itsClass.equals(myClass)) {
			return false;
		} else {
			final BAndBEntity entity = (BAndBEntity) obj;
			if (this.id == null) {
				return entity.id == null && super.equals(obj);
			} else {
				return this.id.equals(entity.id);
			}
		}
	}

	@Override
	public int hashCode() {
		return id == null ? super.hashCode() : id.intValue();
	}
}
