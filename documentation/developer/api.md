# Fight Procrastination API

> Note: The API documentation is being moved to a Postman collection.
> This document will be updated with details about how to use the collection
> in a future commit. For now, it is being kept as a reference until the
> collection and the associated documentation is complete.

`*` indicates an endpoint protected with an `Authorization` header

## `POST /api/signup`

Request:

```js
{
  name: string,
  email: string,
  password: string
}
```

Response:

```js
{
  message: string,
  token: string
}
```

## `POST /api/login`

Request:

```js
{
  email: string,
  password: string
}
```

Response:

```js
{
  message: string,
  token: string
}
```

## `GET /api/users/`\*

Response:

```js
{
  users: [
    {
      id: integer,
      name: string,
      email: string,
      username: string,
    },
  ];
}
```

## `GET /api/users/:id`\*

Response:

```js
{
  id: integer,
  name: string,
  email: string,
  username: string
}
```

## `PUT /api/users/:id`\*

Request:

```js
{
  email: string,
  newPassword: string,
  currentPassword: string
}
```

## `DELETE /api/users/:id`

Request:

```js
{
  email: string;
}
```

Response: HTTP status `204` or `500`

## `GET /api/projects`\*

Response:

```js
{
  projects: [
    {
      id: integer,
      user_id: integer,
      name: string,
      done: boolean,
      image_url: string,
      deadline: date,
      color: string,
      purpose: string,
      friendOneEmail: string,
      friendTwoEmail: string,
    },
  ];
}
```

## `GET /api/projects/:id`\*

Response:

```js
{
	project: {
		id: integer,
		user_id: integer,
		name: string,
		done: boolean,
		image_url: string,
		deadline: date,
		color: string,
		purpose: string,
		friendOneEmail: string,
		friendTwoEmail: string
	},
	features: [
		{
			id: integer,
			user_id: integer,
			project_id: integer,
			title: string,
			done: boolean,
			keyInfo: string,
			tools: string,
			description: string,
			notes: string,
			structure: string,
			start: date with timezone,
			end: date with timezone,
		}
  ],
	tasks: [
		{
			id: integer,
			user_id: integer,
			project_id: integer,
			feature_id: integer,
			task: string,
			done: boolean,
			start: date with timezone,
			end: date with timezone,
		}
	]
}
```

## `PUT /api/projects/:id`\*

Request:

```js
{
	title: string,
	done: boolean,
	keyInfo: string,
	tools: string,
	description: string,
	notes: string,
	structure: string,
	start: date with timezone,
	end: date with timezone,
}
```

## `POST /api/projects`\*

Request:

```js
{
	name: string,
	image_url: string,
	deadline: date,
	purpose: string,
	friendOneEmail: string,
	friendTwoEmail: string
}
```

Response: HTTP status `202` or `500`

## `DELETE /api/projects/:id`

Request:

```js
{
  name: string;
}
```

Response: HTTP status `204` or `500`

## `POST /api/projects/:id/features`\*

Request:

```js
{
    title: string,
	done: boolean,
	keyInfo: string,
	tools: string,
	description: string,
	notes: string,
	structure: string,
}
```

Response: HTTP status `202` or `500`

## `GET /api/projects/:id/features`\*

Users will be able to grab all the features from the project.
Grab an array of features

```js
{
    features: [
        {
            id: integer,
        	user_id: integer,
        	project_id: integer,
        	title: string,
        	done: boolean,
        	keyInfo: string,
        	tools: string,
        	description: string,
        	notes: string,
        	structure: string,
        	start: date with timezone,
        	end: date with timezone,
        }
    ]
}
```

## `GET /api/projects/:id/features/:id`\*

Users will be able to see all the tasks associated with a feature.

```js
{
    features: {
        	id: integer,
        	user_id: integer,
        	project_id: integer,
        	title: string,
        	done: boolean,
        	keyInfo: string,
        	tools: string,
        	description: string,
        	notes: string,
        	structure: string,
        	start: date with timezone,
        	end: date with timezone,
    },
    tasks: [
        {
           	id: integer,
        	user_id: integer,
        	project_id: integer,
        	feature_id: integer,
        	task: string,
        	done: boolean,
        	start: date with timezone,
        	end: date with timezone,
        }
    ]
}
```

## `PUT /api/projects/:id/features/:id`\*

Request:

```js
{
    title: string,
	done: boolean,
	keyInfo: string,
	tools: string,
	description: string,
	notes: string,
	structure: string,
	start: date with timezone,
	end: date with timezone,
}
```

## `DELETE /api/projects/:id/features/:id`\*

Request:

```js
{
  title: string;
}
```

Response: HTTP status `204` or `500`

## `POST /api/projects/:id/features/:id/tasks`\*

Request:

```js
{
  task: string;
}
```

Response: HTTP status `202` or `500`

## `GET /api/projects/:id/features/:id/tasks`\*

```js
{
    tasks: [
        {
    	    id: integer,
        	user_id: integer,
        	project_id: integer,
        	feature_id: integer,
        	task: string,
        	done: boolean,
        	start: date with timezone,
        	end: date with timezone,
        }
    ]
}
```

## `GET /api/projects/:id/features/:id/tasks/:id`\*

```js
{
	id: integer,
	user_id: integer,
	project_id: integer,
	feature_id: integer,
	task: string,
	done: boolean,
	start: date with timezone,
	end: date with timezone,
}
```

## `PUT /api/projects/:id/features/:id/tasks/:id`\*

Request:

```js
{
	done: boolean,
	start: date with timezone,
	end: date with timezone,
}
```

## `DELETE /api/projects/:id/features/:id/tasks/:id`\*

Request:

```js
{
  title: string;
}
```

Response: HTTP status `204` or `500`
