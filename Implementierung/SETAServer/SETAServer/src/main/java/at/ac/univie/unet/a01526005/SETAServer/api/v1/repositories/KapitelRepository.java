package at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Kapitel;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Thema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.springframework.data.domain.Sort.by;
import static org.springframework.data.relational.core.query.Criteria.where;
import static org.springframework.data.relational.core.query.CriteriaDefinition.empty;

/**
 * A repository class to access data about kapitel from the database
 */
@Repository
public class KapitelRepository {
    @Autowired
    private R2dbcEntityTemplate entityTemplate;

    public List<Kapitel> getAllKapitel() {
        return entityTemplate
                .select(Kapitel.class)
                .from("Kapitel")
                .matching(Query.query(empty()).sort(by("kapitelnummer").ascending()))
                .all()
                .collectList()
                .block();
    }

    public Kapitel getKapitel(long kapitelnummer) {
        return entityTemplate
                .select(Kapitel.class)
                .from("Kapitel")
                .matching(Query.query(where("kapitelnummer").is(kapitelnummer)))
                .first().block();
    }

    public List<Thema> getThemen(long kapitelnummer) {
        return entityTemplate
                .select(Thema.class)
                .from("Thema")
                .matching(Query
                        .query(where("kapitelnummer")
                                .is(kapitelnummer))
                        .sort(by("themanummer").ascending()))
                .all()
                .collectList()
                .block();
    }
}
