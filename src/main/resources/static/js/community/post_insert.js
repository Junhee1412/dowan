
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }


    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });

    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
      el.addEventListener('click', function(event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');

          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });

    /**
     * Initiate pURE cOUNTER
     */
    new PureCounter();

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });

  });


    function comma(str) {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    }

    function uncomma(str) {
        str = String(str);
        return str.replace(/[^\d]+/g, '');
    }

    function inputNumberFormat(obj) {
        obj.value = comma(uncomma(obj.value));
    }

    function inputOnlyNumberFormat(obj) {
        obj.value = onlynumber(uncomma(obj.value));
    }

    function onlynumber(str) {
	    str = String(str);
	    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1');
	}

    function removeComma(str){
		n = parseInt(str.replace(/,/g,""));
		return n;
	}

function PostInsertValidChecked() {

   var a_RegExp = /^([1-9]|\w{2,})000$/;

   var objPostIdSelectByFreeSell = document.getElementById("post_id_select_byFreeSell");
   var objPostIdSelectByUsedTransfer = document.getElementById("post_id_select_byUsedTransfer");
   var objPostTitle = document.getElementById("post_title");
   var objPostContent = document.getElementById("post_content");
   var objSecondPrice = document.getElementById("second_amount");

      //?????? ????????? ??????
      if (objPostTitle.value == "") {
        alert("????????? ??????????????????.");
        objPostTitle.focus();
        return false;
      };

      //?????? ????????? ??????
      if (objPostContent.value == "") {
        alert("????????? ??????????????????.");
        objPostContent.focus();
        return false;
      };

      //????????? ????????? ??????
      if ($("input[name='communityId']").val() == 'FRE_SEL'){
          if (objPostIdSelectByFreeSell.value == "") {
            alert("???????????? ????????? ??????????????????.");
            objPostIdSelectByFreeSell.focus();
            return false;
          };
      };


    if ($("input[name='communityId']").val() == 'USD_TRN'){

       if(objPostIdSelectByUsedTransfer.value == ""){
       alert("???????????? ????????? ??????????????????.");
       objPostIdSelectByUsedTransfer.focus();
       return false;
       };

       if(objSecondPrice.value==""){
       alert("????????? ??????????????????.");
       objSecondPrice.focus();
       return false;
       };

       if (!a_RegExp.test(removeComma(objSecondPrice.value))) {
       alert("????????? ?????? ????????? ????????? ???????????????.");
       objSecondPrice.focus();
       return false;
       };

       document.querySelector("input[name='price']").value = removeComma(objSecondPrice.value);
    };

   return true;
};

