package com.conserto.bandb.common.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "PICTURE")
public class Picture extends BAndBEntity implements Serializable {

	private static final long serialVersionUID = -2339584107489624991L;

	@NotBlank
	@Basic(optional = false)
	@Column(name = "PATH", nullable = false)
	private String path;

	public String getPath() {
		return this.path;
	}

	public void setPath(String path) {
		this.path = path;
	}
}