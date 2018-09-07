package com.example.javachallenge;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

public class JavaChallengeApplicationTests extends AbstractTestCases {

	@Test
	public void test_dans_solution2() throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		//JsonNode node =  mapper.readTree(new File("./somejson.json"));
		System.out.println(System.getProperty("user.dir"));

		Path currentRelativePath = Paths.get("");
		String s = currentRelativePath.toAbsolutePath().toString();
		System.out.println("Current relative path is: " + s);
	}

}
