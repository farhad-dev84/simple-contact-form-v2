// گرفتن فرم و فیلد ها از صفحه
const contactForm = document.getElementById("contactForm") ;
const nameInput = document.getElementById("name") ;
const emailInput = document.getElementById("email") ;
const messageInput = document.getElementById("message") ;
const successMessage = document.getElementById("successMessage") ;

// وقتی کاربر فرم را ارسال میکند
contactForm.addEventListener("submit" , function(e) {
  // جلوگیری از رفرش شدن صفحه
  e.preventDefault() ;
  
  // مخفی کردن پیام موفقیت قبلی اگر باشد
  successMessage.classList.add("d-none") ;
  
  // بررسی صحت فیلد های ورودی
  if(validateInputs()) {
    // تگر همه فیلد ها درست بودن
    successMessage.classList.remove("d-none") ;
    // خالی کردن فرم بعد از ارسال موفق
    contactForm.reset() ;
  }
}) ;

// تابع بررسی ورودی ها
function validateInputs() {
  // فرض بر اینکه همه چیز درست بوده مگر اینکه خلافش ثابت بشه
  let isValid = true ;
  
  // بررسی فیلد نام
  if(nameInput.value.trim() === "") {
    // اضافه کردن کلاس قرمز بوت استرپ
    nameInput.classList.add("is-invalid") ;
    // نامعتبر بودن فرم
    isValid = false ;
  } else {
    nameInput.classList.remove("is-invalid") ;
    // حذف حالت خطا اگه درست باشد
  }
  
  // بررسی فیلد ایمیل
  if(emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid") ;
    isValid = false ;
  } else {
    emailInput.classList.remove("is-invalid") ;
  }
  
  // بررسی فیلد پیام
  if(messageInput.value.trim() === "") {
    isValid = false ;
    messageInput.classList.add("is-invalid") ;
  } else {
    messageInput.classList.remove("is-invalid") ;
  }
  
  // در پایان نتیجه را برمیگردانیم
  return isValid ;
}

// تابع بررسی صحبم بودن ایمیل با استفاده از regex 
function validateEmail(email) {
  // الگوی ایمیل
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // چک کردن با متد test
  return re.test(email);
}