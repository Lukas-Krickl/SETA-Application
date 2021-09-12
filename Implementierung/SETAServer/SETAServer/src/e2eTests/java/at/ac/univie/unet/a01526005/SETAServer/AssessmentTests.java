package at.ac.univie.unet.a01526005.SETAServer;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Szenario;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import static org.junit.jupiter.api.Assertions.*;

public class AssessmentTests {
    private static final HttpClient client = ConnectionConfiguration.client;
    private static final String baseUrl = ConnectionConfiguration.baseURI;
    private final ObjectMapper mapper = new ObjectMapper();

    @BeforeAll
    static void beforeAll() {
        AuthenticationTests.login(client, baseUrl);
    }

    @Test
    void startTraining_returnsCorrectJson(){
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/users/anwender/assessments/trainings/kapitel/1"))
                .POST(HttpRequest.BodyPublishers.ofString(""))
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(201, response.statusCode());
            JsonNode node = mapper.readTree(response.body());
            assertTrue(node.has("assessmentID"));
            assertTrue(node.has("vortraining"));
            assertTrue(node.has("nachtraining"));


        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }

    @Test
    void startPruefung_returnsCorrectJson(){
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/users/anwender/assessments/pruefungen"))
                .POST(HttpRequest.BodyPublishers.ofString(""))
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(201, response.statusCode());
            JsonNode node = mapper.readTree(response.body());
            assertTrue(node.has("assessmentID"));
            assertTrue(node.has("szenarien"));


        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }


}
