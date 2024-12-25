{
	"info": {
		"_postman_id": "cb7ef8dd-8f13-44b7-b012-f79d7a4d99cd",
		"name": "BlogBackend4",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39588880"
	},
	"item": [
		{
			"name": "getUser",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://blogbackend4-d4am.onrender.com/api/user",
					"protocol": "https",
					"host": [
						"blogbackend4-d4am",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "postUser",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\":\"ramesh\",\r\n    \"email\":\"ramesh@gmail.com\",\r\n    \"password\":\"ramesh123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blogbackend4-d4am.onrender.com/api/user",
					"protocol": "https",
					"host": [
						"blogbackend4-d4am",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "getBlog",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://blogbackend4-d4am.onrender.com/api/blog",
					"protocol": "https",
					"host": [
						"blogbackend4-d4am",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"blog"
					]
				}
			},
			"response": []
		},
		{
			"name": "postBlog",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzZjMTg2ODgxNmY1NWI5MGQzOTBmZTIiLCJpYXQiOjE3MzUxMzc5MDh9.axJSfn9RGXkp7pijOAGOwtk1pjQQUOUKOyef3O4JOc0",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\":\"have a fun\",\r\n    \"content\":\"enjoy day\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blogbackend4-d4am.onrender.com/api/blog",
					"protocol": "https",
					"host": [
						"blogbackend4-d4am",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"blog"
					]
				}
			},
			"response": []
		}
	]
}
