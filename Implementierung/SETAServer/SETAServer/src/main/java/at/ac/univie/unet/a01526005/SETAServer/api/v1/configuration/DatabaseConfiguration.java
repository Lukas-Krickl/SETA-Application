package at.ac.univie.unet.a01526005.SETAServer.api.v1.configuration;

import io.r2dbc.spi.ConnectionFactory;
import org.mariadb.r2dbc.MariadbConnectionConfiguration;
import org.mariadb.r2dbc.MariadbConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;

/**
 * Configuration for the Mariadb database
 */
@Configuration
public class DatabaseConfiguration {
    @Value("${mariadb.url}")
    private String mariadbURL;

    @Value("${mariadb.user}")
    private String mariadbUser;

    @Value("${mariadb.password}")
    private String mariadbPassword;


    @Bean
    public MariadbConnectionConfiguration getMariaDBConfiguration() {
        return MariadbConnectionConfiguration.builder()
                .host(mariadbURL)
                .port(3306)
                .username(mariadbUser)
                .password(mariadbPassword)
                .database("seta")
                .allowMultiQueries(true)
                .allowPipelining(true)
                .build();
    }

    @Bean
    public ConnectionFactory getMariadbConnectionFactory(MariadbConnectionConfiguration conf) {
        return new MariadbConnectionFactory(conf);
    }

    @Bean
    public R2dbcEntityTemplate getEntityTemplate(ConnectionFactory connectionFactory) {
        return new R2dbcEntityTemplate(connectionFactory);
    }

}
