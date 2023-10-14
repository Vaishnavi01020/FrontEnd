package com.example.demo.Repository;

//public interface RegisterFetchData {

//}
//package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Register;
@Repository
public interface RegisterFetchData extends JpaRepository<Register, String>{

}
