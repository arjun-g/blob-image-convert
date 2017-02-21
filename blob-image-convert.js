(function(){

    if(!Blob.prototype.toPNG){
        Blob.prototype.toPNG = function(callback){
            return convertBlob(this, 'image/png', callback)
        }
    }

    if(!Blob.prototype.toWebP){
        Blob.prototype.toWebP = function(callback){
            return convertBlob(this, 'image/webp', callback)
        }
    }

    if(!Blob.prototype.toJPEG){
        Blob.prototype.toJPEG = function(callback){
            return convertBlob(this, 'image/jpeg', callback)
        }
    }

    function convertBlob(blob, type, callback){
        return new Promise((resolve, reject) => {
            let canvas = createTempCanvas()
            let ctx = canvas.getContext('2d')
            let image = new Image()
            image.src = URL.createObjectURL(blob)
            image.onload = function(){
                canvas.width = image.width
                canvas.height = image.height
                ctx.drawImage(image, 0, 0)
                let result = dataURItoBlob(canvas.toDataURL(type))
                if(callback)
                    callback(result)
                else
                    resolve(result)
            }
        })
    }

    function dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: mimeString});
        return blob;
    }

    function createTempCanvas(){
        let canvas = document.createElement('CANVAS')
        canvas.style.display = 'none'
        return canvas
    }

})()