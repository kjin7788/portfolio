// 모달 관련 요소
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var modalImg = document.getElementById("modalImg");

// .modal-trigger 클래스를 가진 모든 span 요소
var spans = document.querySelectorAll(".modal-trigger");

// 각 span에 클릭 이벤트 추가
spans.forEach(function(span) {
    span.addEventListener("click", function() {
        // 클릭한 span의 data-images 값 가져오기
        var imageSrc = span.getAttribute("data-images");

        // 클릭한 span의 data-bgcolor 값 가져오기
        var bgcolor = span.getAttribute("data-bgcolor");

        // 모달에 이미지 표시
        modalImg.src = imageSrc;

        // 모달 배경색 변경
        var modalContent = modal.querySelector(".modal-content");
        modalContent.style.backgroundColor = bgcolor; 

        // 모달 열기
        modal.style.display = "block";
    });
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";  
});

// 모달 외부 클릭 시 모달 닫기
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  
    }
});
