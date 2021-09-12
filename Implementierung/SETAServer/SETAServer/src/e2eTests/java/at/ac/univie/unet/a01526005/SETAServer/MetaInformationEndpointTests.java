package at.ac.univie.unet.a01526005.SETAServer;

import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

public class MetaInformationEndpointTests {
    private final HttpClient client = ConnectionConfiguration.client;
    private final String baseUrl = ConnectionConfiguration.baseURI;

    @Test
    void requestListOfKapitel_validListReturned() {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/kapitel"))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(200, response.statusCode());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }

    @Test
    void requestListOfThemen_validListReturned() {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/kapitel/1/themen"))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(200, response.statusCode());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }

    @Test
    void requestListOfSzenarien_validListReturned() {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/kapitel/1/themen/1/szenarien"))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(200, response.statusCode());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }
}
