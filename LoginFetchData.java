package com.example.demo.Repository;

//public interface LoginFetchData {

//}
//package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Login;


@Repository
public interface LoginFetchData extends JpaRepository<Login, String>{
	Login findByEmail(String email);
}

//LoginFetchData