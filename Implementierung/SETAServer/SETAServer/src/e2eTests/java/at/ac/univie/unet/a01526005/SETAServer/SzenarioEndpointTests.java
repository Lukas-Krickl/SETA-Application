package at.ac.univie.unet.a01526005.SETAServer;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Szenario;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;


public class SzenarioEndpointTests {

    private final HttpClient client = ConnectionConfiguration.client;
    private final String baseUrl = ConnectionConfiguration.baseURI;
    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    void retrieveSzenario_returnsCorrectJson() {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/szenarien/1"))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(200, response.statusCode());

            assertDoesNotThrow(() -> {
                Szenario szenario = parseSzenario(response.body());
                assertNotNull(szenario);
                assertTrue(szenario.getKapitelnummer() > 0);
            });

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }

    @Test
    void requestUebungsSzenarien_randomSzenario() {
        ArrayList<Long> szenarien = new ArrayList<>();
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/szenarien/uebung/kapitel/1"))
                .GET()
                .build();

        try {
            for (int i = 0; i < 10; i++) {
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                assertEquals(200, response.statusCode());
                szenarien.add(parseSzenario(response.body()).getSzenarioID());
            }

            szenarien.forEach(currentSzenario -> {
                int counter = 0;

                for (Long countSzenario : szenarien) {
                    if (countSzenario.equals(currentSzenario)) {
                        counter++;
                    }
                }
                assertTrue(counter <= 5);
            });

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }

    private Szenario parseSzenario(String body) throws JsonProcessingException {
        JsonNode node = mapper.readTree(body);
        //check fields
        assertTrue(node.has("szenarioID"));
        assertTrue(node.has("kapitelnummer"));
        assertTrue(node.has("themanummer"));
        assertTrue(node.has("typ"));

        //parse szenario
        long szenarioID = node.get("szenarioID").asLong();
        long kapitelnummer = node.get("kapitelnummer").asLong();
        long themanummer = node.get("themanummer").asLong();
        String typ = node.get("typ").asText();

        return new Szenario(szenarioID, kapitelnummer, themanummer, typ);
    }
}
