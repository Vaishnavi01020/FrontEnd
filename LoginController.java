//package com.example.demo.Controllers;
package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Login;
import com.example.demo.Service.LoginService;

//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.responses.ApiResponse;
//import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/logindata")
@CrossOrigin
public class LoginController {
	@Autowired
	LoginService regservice;
	
	//CREATION
	
	@ResponseStatus(HttpStatus.CREATED)
	
	@PostMapping(produces = "application/json", consumes="application/json")
	
	public ResponseEntity<Login> create(final @RequestBody Login details){
		Login category = regservice.create(details);
		return ResponseEntity.ok(category);
	}
	
	@PostMapping("/auth")
	public String login(@RequestBody userLoginRequest loginRequest) {
		String email = loginRequest.getEmail();
		String pasword = loginRequest.getPasword();
		System.out.println(email+pasword);
		boolean isValidUser = regservice.isValidUser(email,pasword);
		if(isValidUser) {
			System.out.print("Login success");
			return "Login Successful";
		}
		else {
			return "Invalid username or Pasword";
		}
	}
	
	static class userLoginRequest{
		private String email;
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPasword() {
			return pasword;
		}
		public void setPasword(String pasword) {
			this.pasword = pasword;
		}
		private String pasword;
	}
}

//LoginController