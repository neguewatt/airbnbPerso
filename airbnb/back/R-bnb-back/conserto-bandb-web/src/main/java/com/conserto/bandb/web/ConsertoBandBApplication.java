package com.conserto.bandb.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan("com.conserto.bandb")
@EntityScan("com.conserto.bandb.common.model")
@EnableJpaAuditing
@EnableJpaRepositories("com.conserto.bandb.common.repositories")
@EnableSwagger2
public class ConsertoBandBApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConsertoBandBApplication.class, args);
	}
}