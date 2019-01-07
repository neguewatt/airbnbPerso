package com.conserto.bandb.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conserto.bandb.swagger.api.LodgingsApi;
import com.conserto.bandb.swagger.dto.InlineResponse200;
import com.conserto.bandb.swagger.dto.LodgingDTO;
import com.conserto.bandb.swagger.dto.LodgingParameterDTO;
import com.conserto.bandb.swagger.dto.PageableDTO;
import com.conserto.bandb.web.dto.PageResultsDTO;
import com.conserto.bandb.web.handler.LodgingHandler;

@RestController
@RequestMapping("/api/lodgings")
public class LodgingController implements LodgingsApi {

	@Autowired
	private LodgingHandler lodgingHandler;

	@Override
	@GetMapping
	public ResponseEntity<List<LodgingDTO>> getAllLodgings() {
		return new ResponseEntity<List<LodgingDTO>>(lodgingHandler.getAllLodgings(), HttpStatus.OK);
	}

	@Override
	@PutMapping
	public ResponseEntity<LodgingDTO> updateLodging(@RequestBody LodgingDTO lodging) {
		return new ResponseEntity<LodgingDTO>(lodgingHandler.updateLodging(lodging), HttpStatus.OK);
	}

	@Override
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteLodging(@PathVariable(value = "id") Long id) {
		lodgingHandler.deleteLodging(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

	@Override
	@GetMapping("/{address}")
	public ResponseEntity<List<LodgingDTO>> getAllLodgingsByAddress(@PathVariable(value = "address") String address) {
		return new ResponseEntity<List<LodgingDTO>>(lodgingHandler.getAllLodgingsByAddress(address), HttpStatus.OK);
	}

	@Override
	@GetMapping("/users/{userId}")
	public ResponseEntity<InlineResponse200> getAllLodgingsByUserId(@PathVariable(value = "userId") Long userId,
			@RequestBody PageableDTO pageable) {
		PageResultsDTO<LodgingDTO> lodgingDTOPage = lodgingHandler.getLodgingsByOwnerId(userId, pageable);
		InlineResponse200 resp = new InlineResponse200();
		resp.setPage(lodgingDTOPage.getPage());
		resp.setResults(lodgingDTOPage.getResults());
		return new ResponseEntity<InlineResponse200>(resp, HttpStatus.OK);
	}

	@Override
	@PostMapping("/users/{userId}")
	public ResponseEntity<LodgingDTO> createLodging(@PathVariable(value = "userId") Long userId,
			@RequestBody LodgingParameterDTO lodging) {
		return new ResponseEntity<LodgingDTO>(lodgingHandler.createLodging(lodging, userId), HttpStatus.CREATED);
	}

}
