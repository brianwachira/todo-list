package com.brianwachira.playgroundwebbackend.repository;

import com.brianwachira.playgroundwebbackend.data.ToDo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoRepository extends MongoRepository<ToDo, String> {

}
