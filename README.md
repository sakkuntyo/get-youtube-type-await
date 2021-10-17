# get-youtube-type-await

## Install

```
npm install get-youtube-type-await
```

## Usage

```js
var getYoutubeTypeAsync = require('get-youtube-title-await')

getYoutubeTypeAsync('ZjM8Wq5pQ2o', function (err, type) {
  console.log(type) // live -> "live" none live -> "none"
})
```

## API

### `getYoutubeTitle(id: string, key: string, function(err, title))`

`id` is the YouTube Video ID. If you have a video URL, use the [`get-youtube-id`](https://www.npmjs.com/package/get-youtube-id) module to find the video ID.
`key` is the YouTube API key. If one is not provided a default key is used. Note that this key may be disabled by YouTube if other users of this library send what it considers abusive requests.

