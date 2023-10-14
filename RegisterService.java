package com.example.demo.Service;
//package com.example.Service;
import com.example.demo.Repository.RegisterFetchData;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.demo.RegisterFetchData;
import com.example.demo.Model.Register;
@Service
public class RegisterService {
	@Autowired
	RegisterFetchData fetchdata;
	public Register create(Register details) {
		return fetchdata.save(details);
	}
	public Optional<Register> read(String email) {
		return fetchdata.findById(email);
	}
	public Register update(Register details) {
		return fetchdata.save(details);
	}

}