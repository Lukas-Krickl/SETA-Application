package at.ac.univie.unet.a01526005.SETAServer.api.v1.services;


import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Service that acts as middleware between the applications user repository
 * and the spring security framework
 */
@Service
public class DatabaseUserDetailsService implements UserDetailsService {
    private UserRepository repository;

    public DatabaseUserDetailsService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails userDetails = repository
                .getUser(username);

        if (userDetails == null) {
            throw new UsernameNotFoundException(username);
        }
        return userDetails;
    }
}


