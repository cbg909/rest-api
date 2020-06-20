#
First Time Use
==============

 - npm install
 - run `node index.js`
 
 ### Post new data
 - open Postman and create a Post request in order to test the api.
 - app is running on port 1337.
 - request-url: http://localhost:1337/app (method: POST)
 - payload for example:
```
{
    "name":"Ela",
    "author": "SampleApp",
    "version": [{
        "version_num": "1.0.0",
        "release_date": "11/12/19",
        "url": "drive.com/sampleApp.zip",
        "release_notes": [{
            "content": "sampleApp releasenote (1) v-1.0.0",
            "public_flag": true,
            "important_flag": true
        },
        {
            "content": "sampleApp releasenote (2) v-1.0.0",
            "public_flag": true,
            "important_flag": false
        },
        {
            "content": "sampleApp releasenote (3) v-1.0.0",
            "public_flag": true,
            "important_flag": true
        }]
    },
    {
        "version_num": "1.1.0",
        "release_date": "08/12/19",
        "url": "drive.com/sample.zip",
        "release_notes": [{
            "content": "sampleApp releasenote (1) v-1.1.0",
            "public_flag": true,
            "important_flag": false
        },
        {
            "content": "sampleApp releasenote (2) v-1.1.0",
            "public_flag": true,
            "important_flag": false
        }]
    }
  ]
}

```

### Get Release notes data
- from the given post request, copy some app Id
- perform a get request as following: 
http://localhost:1337/app/version/5dec159f118a7524f16aee23?version_num=1.0.0&page=1&limit=5
- you can change limit number from the query string
# rest-api
