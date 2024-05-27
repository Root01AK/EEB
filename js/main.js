(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0});
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    $(".new").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true
    });
    
})(jQuery);


// Slide Tab
const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');
    })
})

const teamTabs = document.querySelectorAll('.tab_btn');
const teamContents = document.querySelectorAll('.teamContent');

teamTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        teamTabs.forEach(tab => { tab.classList.remove('team_btn') });
        tab.classList.add('team_btn');

        teamContents.forEach(content => { content.classList.remove('active') });
        teamContents[index].classList.add('active');
    });
});

const eventTab = document.querySelectorAll('.event_btn');
const eventContent = document.querySelectorAll('.event-content');

eventTab.forEach((tab, index)=> {
    tab.addEventListener('click', ()=>{
        eventTab.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        eventContent.forEach(content=>{content.classList.remove('active')});
        eventContent[index].classList.add('active');
    })
})



// CopyRights Auto Year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Contact Form Validation
$("#form").validate({
    rules: {
        Fname: {
            minlength: 2
        },
        Lname: {
            Lname: false
        },
        email: {
            email: true
        },
        phone: {
            number: true,
            minlength: 10,
            maxlength: 10
        },
        Message: {
            Message: false
        }
    },
    messages: {
        Fname: {
            required: "Please enter your name",
            minlength: "Name at least 2 characters"
        },
        email: "Please enter your email",
        phone: "Please enter your number",
        Lname: "",
        Message: ""
    },

    submitHandler: function(form) {
      form.submit();
    }
   });


//    Team

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close-popup').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        document.getElementById('popup').classList.add('hidden');
    });
});









