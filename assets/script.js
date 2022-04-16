const services = [
  {
    id: 1,
    title: "تپسی کلاسیک",
    content:
      "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.",
    img: "/Img/illus-classic.webp",
  },
  {
    id: 2,
    img: "/Img/illus-motopeyk.webp",
    title: " موتو پیک",
    content:
      "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.",
  },
  {
    id: 3,
    img: "/Img/illus-autopeyk.webp",
    title: " اتو پیک",
    content:
      "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.",
  },
  {
    id: 4,
    img: "/Img/illus-plus.webp",
    title: " تپسی پلاس",
    content:
      "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.",
  },
  {
    id: 5,
    img: "/Img/illus-tel.webp",
    title: " تپسی تلفنی",
    content:
      "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.",
  },
  {
    id: 6,
    img: "/Img/illus-hamyar.webp",
    title: "  همیار",
    content:
      "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.",
  },
  {
    id: 7,
    img: "/Img/illus-hamkhat.webp",
    title: "هم خط",
    content:
      "سرویس هم‌خط تپسی شما را با مینی‌بوس‌ به مقصد می‌رساند. با استفاده از سرویس هم‌خط بعد از انتخاب مسیر سفر، بلیت‌تان را خریداری کنید و سریع‌تر و راحت‌تر به مقصد برسید. این سرویس خطی بسیار ارزان‌تر از دیگر سرویس‌های تپسی است و شما را سریع‌تر و راحت‌تر از حمل‌ونقل عمومی به مقصدتان می‌رساند. شما می‌توانید از قبل بلیت هم خط را رزرو کنید و با رعایت فاصله اجتماعی به مقصد برسید. سرویس مینی بوس آنلاین فعلا فقط در تهران فعال است.",
  },
  {
    id: 8,
    img: "/Img/illus-taxi.webp",
    title: "  تاکسی",
    content:
      "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.",
  },

  {
    id: 9,
    img: "/Img/illus-line.webp",
    title: "  تپسی لاین",
    content:
      "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید.",
  },
];
const subText = document.querySelector(".sub-text");
const text = document.querySelector(".text-of-services .text p");
const imgServices = document.querySelector(".img-box-of-services-text img");
const imgBoxes = document.querySelectorAll(".images-of-services .img-box");
window.addEventListener("DOMContentLoaded", function (e) {
  informationServices();
});
let counter = -1;
function informationServices() {
  imgBoxes.forEach((item, index) => {
    item.addEventListener("click", function () {
      subText.innerHTML = services[index].title;
      text.innerHTML = services[index].content;
      imgServices.src = services[index].img;
    });
  });
  setInterval(movingInformaion, 10000);
  function movingInformaion() {
    counter++;
    subText.innerHTML = services[counter].title;
    text.innerHTML = services[counter].content;
    imgServices.src = services[counter].img;
    // imgBoxes[counter].style.opacity='1';
    if (counter == 8) {
      counter = -1;
    }
  }
  // console.log()
}
const hamburger = document.querySelector(".hamburger-bar");
const navbar = document.querySelector(".navbar-menu-toggle");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});
const itemParallax = document.querySelectorAll(".section-parallax .item");
const itemTextParallax = document.querySelectorAll(".item-text-parallax");
// const
itemParallax.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    itemTextParallax[index].classList.add("showUp");
    itemTextParallax[index].classList.remove(".moveBottom");
  });
  item.addEventListener("mouseleave", function () {
    itemTextParallax[index].classList.add(".moveBottom");
    itemTextParallax[index].classList.remove("showUp");
  });
});


















// const name = "amin";
// let num = 1;
// export { name, num };

// const sum = (a,b)=>{
//   return a+b
// }
// export default sum;

