
package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Login;
import com.example.demo.Model.Register;
import com.example.demo.Service.LoginService;
import com.example.demo.Service.RegisterService;
import com.fasterxml.jackson.core.JsonProcessingException;



@RestController
@RequestMapping("/api/forgotpassword")
@CrossOrigin(origins = "http://localhost:3000")
public class ForgetPasswordController {
    @Autowired
    RegisterService regservice;
    
    @Autowired
    LoginService userService;

    // Updating Register Table
   
    @PutMapping(value = "/register/{username}", produces = "application/json")
    public ResponseEntity<?> updateRegister(@PathVariable String username, @RequestBody Register details, BindingResult result) throws JsonProcessingException {
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(getFieldErrors(result));
        }

        final Register updatedId = regservice.update(details);
        return ResponseEntity.ok(updatedId);
    }

    // Updating Login Table
   
    @PutMapping(value = "/login/{username}", produces = "application/json")
    public ResponseEntity<?> updateLogin(@PathVariable String username, @RequestBody Login details, BindingResult result) throws JsonProcessingException {
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(getFieldErrors(result));
        }

        final Login updatedId = userService.update(details);
        return ResponseEntity.ok(updatedId);
    }

    private String getFieldErrors(BindingResult result) {
        StringBuilder errors = new StringBuilder();
        for (FieldError error : result.getFieldErrors()) {
            errors.append(error.getField()).append(": ").append(error.getDefaultMessage()).append(", ");
        }
        return errors.substring(0, errors.length() - 2);
    }
}
