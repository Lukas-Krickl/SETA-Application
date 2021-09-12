package at.ac.univie.unet.a01526005.SETAServer.api.v1.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisPassword;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;


/**
 * Configuration Class for the Redis session storage
 */
@Configuration
@EnableRedisHttpSession
public class SessionStoreConfiguration {
    @Value("${seta.redis.hostname}")
    private String redisServerName;

    @Value("${seta.redis.password}")
    private String redisPassword;

    @Value("${seta.redis.username}")
    private String redisUsername;

    @Bean
    public LettuceConnectionFactory redisConnectionFactory() {
        RedisStandaloneConfiguration config = new RedisStandaloneConfiguration(redisServerName, 6379);
        config.setPassword(RedisPassword.of(redisPassword));
        config.setUsername(redisUsername);
        return new LettuceConnectionFactory(config);
    }


}
