const photoSlideShow = {
    photoList: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow reached.");
        }
    },
    prevPhoto: function() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("Beginning of slideshow reached.");
        }
    },
    getCurrentPhoto: function() {
        console.log(this.photoList[this.currentPhotoIndex]);
    },
    addPhoto(photo) {
        this.photoList.push(photo);
    }  
};


photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();


