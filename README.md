## API

### Login [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/authentication/login-action
```
**Parametri**
```
{
  username_email: string,
  password: string
}
```

### Signup [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/authentication/signup-action
```
**Parametri**
```
{
  name: string,
  surname: string,
  email: string,
  password: string,
  password_confirmation: string,
  username: string
}
```

### Refresh token [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/refresh-token
```
**Header**
```
Authorization: <token>
```

### Refresh portfolio code [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/refresh-portfolio-code
```
**Header**
```
Authorization: <token>
```

### Get cards [GET]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/get-cards
```
**Header**
```
Authorization: <token>
```

### Move card [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/move-card
```
**Parametri**
```
{
  "card_id": integer,
  "portfolio_code": string
}
```

**Header**
```
Authorization: <token>
```
