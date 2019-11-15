package com.whs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class EsaleApplication {
	@RequestMapping("/")
	String index() {
		System.out.println("redirect to home page000!");
		return "Hello Spring Boot"; 
	}
	public static void main(String[] args) {
		SpringApplication.run(EsaleApplication.class, args);
	}

}
