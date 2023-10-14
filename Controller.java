package com.example.demo;
//package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/books")
@RestController
public class Controller {
	
	@Autowired
	FetchDataService fetchDataService;

	@GetMapping("/get")
	public List<book>getUsers(){
		return fetchDataService.findAll();
	}
	@GetMapping("/get/{id}")
	Optional<book>getuserid(@PathVariable("id") int id){
		return fetchDataService.findById(id);
	}
	@PostMapping("/post")
    public book create(@RequestBody book d) {
        return fetchDataService.save(d);
    }
	
	@PutMapping("/put/{id}")
    public book update(@RequestBody book d,@PathVariable("id") int id) {
        return fetchDataService.save(d);
    }
	
	@DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
    fetchDataService.deleteById(id);
	}
}

