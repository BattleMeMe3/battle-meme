# API Documentation

## Authentication

### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

### POST /api/auth/login
Authenticate user and get token.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

## Game Operations

### GET /api/games
Get list of available games.

**Response:**
```json
{
  "games": [{
    "id": "string",
    "status": "string",
    "players": ["string"],
    "createdAt": "string"
  }]
}
```

### POST /api/games/create
Create a new game session.

**Request Body:**
```json
{
  "gameType": "string",
  "maxPlayers": "number"
}
```

## User Profile

### GET /api/users/profile
Get current user profile.

**Response:**
```json
{
  "user": {
    "id": "string",
    "username": "string",
    "email": "string",
    "stats": {
      "gamesPlayed": "number",
      "gamesWon": "number"
    }
  }
}
```

## WebSocket Events

### Game Events
- `game:join` - Join a game session
- `game:start` - Start the game
- `game:move` - Make a move
- `game:end` - Game ended

### Chat Events
- `chat:message` - Send/receive chat message
- `chat:typing` - User typing indicator

## Error Handling

All API endpoints return standard error responses:

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

## Rate Limiting

API requests are limited to:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users