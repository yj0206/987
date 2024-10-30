document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".clickable");
    let currentImageIndex = 0;
    
    images[currentImageIndex].classList.remove('hidden'); // 显示第一张图片

    images.forEach((image, index) => {
        image.addEventListener("click", function() {
            if (index === currentImageIndex) {
                currentImageIndex++;
                if (currentImageIndex < images.length) {
                    images[currentImageIndex].classList.remove('hidden');
                } else {
                    alert("所有图片都已消失！");
                }
                images[index].classList.add('hidden');
            }
        });
    });
});
