# Exp-7_FSD_Anurag_23BAI70225

## Experiment 7: Role-Based Authorization (RBAC)

Spring Boot backend implementing authentication and role-based access control using Spring Security.

## Objective
- Implement authentication using username/password.
- Authorize endpoints using `ROLE_USER` and `ROLE_ADMIN`.
- Return proper `401 Unauthorized` and `403 Forbidden` responses.

## Tech Stack
- Java 17
- Spring Boot 3.3.2
- Spring Security
- Spring Data JPA
- H2 Database

## Demo Users
Seeded automatically on first run:

| Username | Password | Role |
|---|---|---|
| `user1` | `user123` | `ROLE_USER` |
| `admin1` | `admin123` | `ROLE_ADMIN` |

## Access Rules
- `/api/public/**` -> Public
- `/api/auth/login` -> Public
- `/api/user/**` -> `ROLE_USER`, `ROLE_ADMIN`
- `/api/admin/**` -> `ROLE_ADMIN` only

## API Endpoints
1. `GET /api/public/hello`
2. `POST /api/auth/login`
3. `GET /api/user/profile`
4. `GET /api/admin/dashboard`

## Run Project
```bash
mvn spring-boot:run
```

Base URL: `http://localhost:8080`

## Postman Test Cases
1. `GET /api/public/hello` (No Auth) -> `200`
2. `POST /api/auth/login` with `user1/user123` -> `200`
3. `GET /api/user/profile` with `user1/user123` -> `200`
4. `GET /api/admin/dashboard` with `user1/user123` -> `403`
5. `GET /api/admin/dashboard` with `admin1/admin123` -> `200`
6. `GET /api/user/profile` without auth -> `401`

## Sample Login Body
```json
{
  "username": "user1",
  "password": "user123"
}
```

## H2 Console
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:file:./data/exp7db`
- Username: `sa`
- Password: *(empty)*

## Project Structure
```text
src/
|- main/
|  |- java/com/example/experiment7/
|  |  |- config/
|  |  |- controller/
|  |  |- dto/
|  |  |- entity/
|  |  |- repository/
|  |  |- service/
|  |  `- Experiment7Application.java
|  `- resources/
|     |- application.properties
|     `- data.sql
`- test/
```

## Screenshots

### 1) Login Success
![01-login-success](screenshots/01-login-success.png)

### 2) USER Accessing User Endpoint
![02-user-endpoint-success](screenshots/02-user-endpoint-success.png)

### 3) USER Blocked on Admin Endpoint (403)
![03-user-forbidden-admin](screenshots/03-user-forbidden-admin.png)

### 4) ADMIN Accessing Admin Endpoint
![04-admin-endpoint-success](screenshots/04-admin-endpoint-success.png)

### 5) No Authentication (401)
![05-unauthorized-no-auth](screenshots/05-unauthorized-no-auth.png)

### 6) Project Structure
![06-project-structure](screenshots/06-project-structure.png)
