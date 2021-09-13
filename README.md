# Bacherlor Thesis: SETA-Application
(Computer) Security Education Training Awareness Application for small and medium sized enterprises.


----
#### About
This is the implementation of my bachelor thesis project.
It can be started and checked out as a demo of the app but for deployment in a realworld setting, a few things have to be changed and extended:

+ config files contain credentials for accessing the system
+ a new certificate for the web server has to be generated
+ a mechanism for registration of new users and user management has to be implemented  


#### How to start the demo system
1. Navigate into the `Implementierung` folder
2. Call `docker-compose up`

#### Using the demo system
+ open `https://localhost:443` to access the application   
+ use the system as a **regular employee** with:
    + username: `anwender`
    + password: `test`

+ use the system as a **trainer** with:
    + username: `trainer`
    + password: `test`
