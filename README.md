**NPM Commands**

first of all go to the client folder and run:
```
npm create vite@latest
```
then go to the server folder and run:
```
npm install
```

**Docker Compose Commands**

Build and Run All Services
```
docker compose -f docker-compose-dev.yml up --build -d
```

Check the Status
```
docker compose -f docker-compose-dev.yml ps
```

View Logs
```
docker compose -f docker-compose-dev.yml logs -f
```

Stop and Remove Everything
```
docker compose -f docker-compose-dev.yml down
```

**Note**: You can replace `docker compose` with `docker-compose`