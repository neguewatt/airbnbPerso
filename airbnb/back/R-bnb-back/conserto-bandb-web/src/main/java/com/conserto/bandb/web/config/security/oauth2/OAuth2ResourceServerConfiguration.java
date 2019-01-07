package com.conserto.bandb.web.config.security.oauth2;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

@Configuration
@EnableResourceServer
public class OAuth2ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

	@Override
	public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
		resources.resourceId(OAuth2Configuration.RESOURCE_ID);
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().requestMatchers()
				.antMatchers("/oauth/**", "/api/**", "/v2/api-docs", "/swagger-ui.html", "/swagger-resources/**",
						"/webjars/**")
				.and().authorizeRequests().antMatchers("/oauth/**").permitAll().and().authorizeRequests()
				.antMatchers("/v2/api-docs", "/swagger-resources/**", "/swagger-ui.html", "/webjars/**",
						"/swagger.json")
				.permitAll().anyRequest().authenticated().antMatchers(HttpMethod.POST, "/api/users").permitAll()
				.anyRequest().authenticated().and()

				.csrf().disable().cors().disable();

		// @formatter:on
	}

}
