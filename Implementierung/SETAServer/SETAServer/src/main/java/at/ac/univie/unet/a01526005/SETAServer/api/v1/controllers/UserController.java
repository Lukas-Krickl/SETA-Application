package at.ac.univie.unet.a01526005.SETAServer.api.v1.controllers;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.BenutzerInformation;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.List;

/**
 * Controller class to access user information
 */
@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    /**
     * Endpoint to retrieve a list of all users, for the trainer users only
     */
    @GetMapping("/users")
    public List<BenutzerInformation> getUsers() {
        return userRepository.getAllUserInformation();
    }

    /**
     * Endpoint to retrieve the user information associated with the given sessionToken
     * @return returns information about the currently logged in user
     */
    @GetMapping("/whoami")
    public BenutzerInformation rememberMe(Principal principal) {
        if (principal != null) {
            return userRepository.getUserInformation(principal.getName());
        }
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not authenticated");
    }

}
