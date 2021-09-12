package at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.BenutzerInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.springframework.data.relational.core.query.Criteria.where;

/**
 * Repository class to access User information from the database
 */
@Repository
public class UserRepository {
    @Autowired
    private R2dbcEntityTemplate entityTemplate;

    public List<BenutzerInformation> getAllUserInformation() {
        return entityTemplate
                .select(BenutzerInformation.class)
                .matching(Query.empty().sort(Sort.by("nachname").ascending()))
                .all()
                .collectList()
                .block();
    }


    /**
     * Returns the user information for spring security
     */
    public UserDetails getUser(String benutzername) {
        return entityTemplate.getDatabaseClient()
                .sql("SELECT * FROM User WHERE benutzername=:benutzername")
                .bind("benutzername", benutzername)
                .fetch()
                .one()
                .map(stringObjectMap -> User.builder()
                        .username((String) stringObjectMap.get("benutzername"))
                        .password((String) stringObjectMap.get("passwort"))
                        .authorities("ROLE_" + (String) stringObjectMap.get("rolle"))
                        .build())
                .block();
    }


    public BenutzerInformation getUserInformation(String benutzername) {
        return entityTemplate
                .selectOne(Query.query(where("benutzername").is(benutzername)), BenutzerInformation.class)
                .block();
    }
}
