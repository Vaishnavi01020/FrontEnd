package com.example.demo.Service;

//LoginService 

//package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.LoginFetchData;
import com.example.demo.Model.Login;

@Service
public class LoginService {
	@Autowired
	LoginFetchData fetchdata;
	public Login create(Login details) {
		return fetchdata.save(details);
	}
	public boolean isValidUser(String email, String pasword) {
		Login user = fetchdata.findByEmail(email);
		System.out.print(user != null && user.getPasword().equals(pasword));
		return user != null && user.getPasword().equals(pasword);
	}
	public Optional<Login> read(String email) {
		return fetchdata.findById(email);
	}
	public Login update(Login details) {
		return fetchdata.save(details);
}
}
