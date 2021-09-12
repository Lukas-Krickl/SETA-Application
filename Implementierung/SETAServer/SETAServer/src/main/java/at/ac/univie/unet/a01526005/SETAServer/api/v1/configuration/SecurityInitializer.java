package at.ac.univie.unet.a01526005.SETAServer.api.v1.configuration;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.DelegatingFilterProxy;

import javax.servlet.ServletContext;

/**
 * Configuration class to enable spring security
 */
@Configuration
public class SecurityInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext context) {

        AnnotationConfigWebApplicationContext root = new AnnotationConfigWebApplicationContext();
        root.register(AuthenticationConfiguration.class);

        context.addListener(new ContextLoaderListener(root));

        context.addFilter("securityFilter", new DelegatingFilterProxy("springSecurityFilterChain"))
                .addMappingForUrlPatterns(null, false, "/*");
    }
}

