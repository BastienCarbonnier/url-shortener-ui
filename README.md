# Url shortener UI

This project is a React application built using Vite for fast development, Mui React for UI components, and Linaria for styling. It aims to provide a seamless development experience with efficient bundling and easy-to-maintain styling.

This application is accessible at : [Url shortener UI](https://urlshortener-ui-1c6938ccabc0.herokuapp.com/).

It's on Eco mode on Heroku so on the first connection the server needs to launch so it could take some time for the first shorten Url.



## Technology used
* React: Utilizes the power of React for building reusable UI components and managing application state.
* Vite: Harnesses Vite for lightning-fast development with instant server start and rapid hot module replacement.
* Mui React: Integrates Material-UI React components for a polished and consistent user interface design.
* Linaria: Employs Linaria for writing CSS in JavaScript with zero runtime overhead, enabling robust styling solutions.

## Features
* Internationalization (You can switch from english to french)
* Use of react hook form for the input (Adding validation for the input)
* Use of linaria
* Use of Vite instead of webpack for building
* Adding redirection on '*' route so the user will be redirected when using his shortened Url


## Launching application

To launch latest backend and frontend images and a postgresql database you can use this docker-compose file : [Docker Compose File](https://github.com/BastienCarbonnier/url-shortener-api/blob/main/docker/docker-compose.yaml).

## Testing Cypress
To launch the test you need first to launch the application with this command :
```bash
docker compose -f cypress/docker/url-shortener.yaml -p "url-shortener" up
```

