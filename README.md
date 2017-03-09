# Blob Image Convert
Convert image Blob or File object to different formats (png, webp and jpeg)

## toPNG (convert blob to PNG)
Convert image blob to PNG blob

## toJPEG (convert blob to JPEG)
Convert image blob to JPEG blob

## toWebP (convert blob to WebP) - Works only on chrome, falls back to png
Convert image blob to WebP blob

## Usage

Either use the callback or as a Promise
```javascript
blob.ToPNG(function(pngBlob){
    
})

blob.ToPNG(pngBlob = >{
    
})

blob.ToPNG().then(function(pngBlob) {

})

blob.ToPNG().then(pngBlob => {

})
```

## How it works
The source blog image is drawn on a canvas object and then toDataURL method of canvas to convert to different file type.