FROM mariadb:10.4
ENV MYSQL_ROOT_PASSWORD=2474e6fa4caf89a76541575ad15de30b
ENV MYSQL_DATABASE=seta
ENV MYSQL_USER=seta_admin
ENV MYSQL_PASSWORD=edcc67bbd164aa7ee858794cccaf4e45

COPY config.cnf /etc/mysql/conf.d/config.cnf
RUN chmod 0444 /etc/mysql/conf.d/config.cnf

COPY setup /docker-entrypoint-initdb.d/
COPY szenarien /docker-entrypoint-initdb.d/

EXPOSE 3306
