package at.ac.univie.unet.a01526005.SETAServer;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpHeaders;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;


public class AuthenticationTests {
    private final HttpClient client = ConnectionConfiguration.client;
    private final String baseUrl = ConnectionConfiguration.baseURI;

    private ObjectMapper mapper = new ObjectMapper();

    @Test
    void loginWithInvalidCreds_status403Returned() {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/login"))
                .POST(HttpRequest.BodyPublishers.ofString(""))
                .header(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded")
                .build();
        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(403, response.statusCode());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }

    @Test
    void loginWithValidCreds_statusOKReturned() {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/login"))
                .POST(HttpRequest.BodyPublishers.ofString("benutzername=anwender&passwort=test"))
                .header(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded")
                .build();
        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            assertEquals(200, response.statusCode());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }


    public static void login(HttpClient client, String baseUrl) {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(baseUrl + "/login"))
                .POST(HttpRequest.BodyPublishers.ofString("benutzername=anwender&passwort=test"))
                .header(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded")
                .build();

        try {
            client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            fail();
        }
    }
}
