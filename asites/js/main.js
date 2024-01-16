  // this is start the drobdown selected
function initializeDropdown(inputSelector, radSelector) {
    let input = document.querySelector(inputSelector);
  
      input.classList.toggle("open");
      let list = input.nextElementSibling;
      if (list.style.maxHeight) {
        list.style.maxHeight = null;
        list.style.boxShadow = null;
      } else {
        list.style.maxHeight = '20.6rem';
        list.style.boxShadow =
          "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
      }
  
    var rad = document.querySelectorAll(radSelector);
    rad.forEach((item) => {
      item.addEventListener("change", () => {
        input.innerHTML = item.nextElementSibling.innerHTML;        
        input.click();
      });
    });
  }
  // this is the saerch selected
  function search(searchin, labelSelector) {
    var labels = document.querySelectorAll(labelSelector);
    let searchVal = searchin.value.trim().toUpperCase();
    labels.forEach((item) => {
      let checkVal = item.querySelector(".name").textContent.trim().toUpperCase();
      if (checkVal.indexOf(searchVal) === -1) {
        // anime.js =>     <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
        anime({
            targets: item,
            opacity: 0,
            duration: 400,
            easing: "easeInOutQuad",
            complete: () => {
              item.style.display = "none";
            },
          });
      } else {
        item.style.display = "flex";
          anime({
            targets: item,
            opacity: 1,
            duration: 400,
            easing: "easeInOutQuad",
          });
      }
      let list = item.closest(".list");
      list.style.maxHeight = '20.6rem';
    });
  }
  // this is end the saerch selected

// two show count 2 btn
  function showContent(contentType) {
    $('.content').addClass('animate__animated animate__fadeRight').hide();
    $('#' + contentType + 'Content').removeClass('animate__fadeOutLeft').addClass('animate__animated animate__fadeInLeft').show();
    $('.btn').removeClass('active');
    $('.btn').filter(function () {
        return $(this).text().trim() === (contentType === 'beneficiary' ? 'منتهز فرصة' : 'مقدم فرصة');
    }).addClass('active');
}

// two show count 3 btn
function showPage(pageId, btn) {
  $('.btn-groub-item').removeClass('active');
  $(btn).addClass('active');
  var currentPage = $('.Content-edit-profile.active');
  var newPage = $(`#${pageId}Page`);
  $('.Content').removeClass('active');
  currentPage.removeClass('active');
  newPage.addClass('active  animate__animated animate__fadeRight animate__fadeInLeft');    
}

  // this is start filter 
let sliderOpen = false;  // إضافة متغير لتتبع حالة السلايدر
  function toggleSlider() {
    const carousel = document.getElementById('myCarousel');
    const contentJob = document.querySelector('.content-job-slide');
  
  
  
    // إضافة أو إزالة الـ active class
    carousel.classList.toggle('active');
  
    // تحديث حالة السلايدر
    sliderOpen = !sliderOpen;
  }

// input file
  function updateFilename() {
    var input = document.getElementById('formFile');
    var filenameDisplay = document.getElementById('filename');
    var uploadContainer = document.getElementById('uploadContainer');
  var uploadText = document.getElementById('uploadText');

if (input.files.length > 0) {
  filenameDisplay.innerHTML = input.files[0].name;
  uploadContainer.classList.add('file-uploaded');
  uploadText.innerHTML = 'تم اختيار الملف: ';
} else {
  filenameDisplay.innerHTML = 'لم يتم اختيار أي ملف';
  uploadContainer.classList.remove('file-uploaded', 'drag-over');
  uploadText.innerHTML = 'إسحب و أفلت الملف هنا';
  dContainer.classList.remove('file-uploaded', 'drag-over');
}
    }
// input file end