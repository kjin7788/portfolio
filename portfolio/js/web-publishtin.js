document.addEventListener("DOMContentLoaded", function() {
// #processLink 클릭 시 이미지 모달 띄우기
document.getElementById("processLink").addEventListener("click", function(event) {
    event.preventDefault(); 

    // 이미지 경로 설정 (images 폴더 안의 processe.jpg)
    var imageUrl = "images/processe.jpg";

    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageUrl;  
    modal.style.display = "block"; 
});

// 모달 닫기
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("imageModal").style.display = "none";
});
// 모달 밖을 클릭했을 때 모달 닫기
window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
});