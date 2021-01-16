# Fight Procrastination Database

## `Users`\*

```js
{
  id: integer,
  name: string,
  email: string,
  username: string
}
```

## `Projects`\*

```js
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
	friendTwoEmail: string
}

```

## `Features`\*

```js
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

```

## `Tasks`\*

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
