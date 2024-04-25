var imgInput = document.getElementById("profileImg");
var previewImg = document.getElementById("previewImg");

imgInput.addEventListener("change", function() {
    var file = this.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function() {
            previewImg.src = reader.result;
        };

        reader.readAsDataURL(file);
    }
});