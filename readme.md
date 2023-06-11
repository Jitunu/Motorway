# Project Title
Motorway

## Demo link:
    MotorWay (http://localhost:3003/motorway/vehicle/)

## Table of Content:
- [Project Description](#project-description)
- [Install requirements](#install-requirements)
- [Project framework and tools](#technologies)
- [Project Structure](#project-structure)

<div id='project-description'>
#Project Description:

    To retreive vehicle information and state of an given vehicleId within a particular timestamp. 
</div>
<div id='install-requirements'>
#Install requirements:

    - docker (https://docs.docker.com/get-docker/)

    To initialize this project, run `docker compose up` from the root of this project. This will build and seed the database. By default the database runs on port `5432` and is also exposed on `5432`, if you want to change this you can update `docker-compose.yml`.

    - npm install
</div>
<div id='technologies'>
#Project framework and tools:

    1. NodeJS
    2. ExpressJS
    3. Sequelize(ORM tool)
    4. Mocha(Test framwork)
    5. Chai(Asseration) 
</div>
<div id='project-structure'>
#Project Structure:

    config      : Database config details.
    model       : Sequelize db model define.
    controller  : Business Logic.
    dto         : Data Transfer Object defined.
    routes      : API route url. 
    app/index.js: Server details.
</div>


