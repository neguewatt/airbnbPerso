package com.conserto.bandb.web.dto;

import java.util.List;

import com.conserto.bandb.swagger.dto.BAndBDTO;
import com.conserto.bandb.swagger.dto.PageDTO;

public class PageResultsDTO<D extends BAndBDTO> {

	private PageDTO page;

	private List<D> results;

	public PageDTO getPage() {
		return page;
	}

	public void setPage(PageDTO page) {
		this.page = page;
	}

	public List<D> getResults() {
		return results;
	}

	public void setResults(List<D> results) {
		this.results = results;
	}
}
