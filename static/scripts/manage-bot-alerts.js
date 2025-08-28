function showAlert(title, text, icon, showCancel = false) {
    const isDarkMode = document.documentElement.classList.contains('dark');

    const alertOptions = {
        background: isDarkMode ? 'oklch(0.21 0.034 264.665)' : '#fff',
        color: isDarkMode ? 'oklch(0.985 0.002 247.839)' : 'oklch(0.13 0.028 261.692)',
        confirmButtonColor: isDarkMode ? 'oklch(0.488 0.243 264.376)' : 'oklch(0.623 0.214 259.815)',
        cancelButtonColor: isDarkMode ? '#f44336' : '#d33',
    };

    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'باشه',
        showCancelButton: showCancel,
        cancelButtonText: 'لغو',
        background: alertOptions.background,
        color: alertOptions.color,
        confirmButtonColor: alertOptions.confirmButtonColor,
        cancelButtonColor: alertOptions.cancelButtonColor
    });
}

const alerts = {
    'add-message': ['افزوده شد!', 'پیام با موفقیت اضافه/ویرایش شد.', 'success'],
    'accept-rules-error': ['قوانین و شرایط!', 'مطالعه و تایید قوانین و شرایط وبسایت الزامی است!', 'error'],
    'remove-message': ['حذف شد!', 'پیام از لیست حذف شد.', 'info', true],
    'edit-message': ['آماده ویرایش!', 'پیام برای ویرایش انتخاب شد.', 'info'],
    'add-button': ['افزوده شد!', 'دکمه با موفقیت اضافه/ویرایش شد.', 'success'],
    'remove-button': ['حذف شد!', 'دکمه از لیست حذف شد.', 'info', true],
    'edit-button': ['آماده ویرایش!', 'دکمه برای ویرایش انتخاب شد.', 'info'],
    'add-command': ['افزوده شد!', 'دستور با موفقیت اضافه/ویرایش شد.', 'success'],
    'remove-command': ['حذف شد!', 'دستور از لیست حذف شد.', 'info', true],
    'edit-command': ['آماده ویرایش!', 'دستور برای ویرایش انتخاب شد.', 'info'],
    'add-file': ['آپلود شد!', 'فایل با موفقیت آپلود/ویرایش شد.', 'success'],
    'remove-file': ['حذف شد!', 'فایل از لیست حذف شد.', 'info', true],
    'edit-file': ['آماده ویرایش!', 'فایل برای ویرایش انتخاب شد.', 'info'],
    'add-ad': ['افزوده شد!', 'تبلیغ با موفقیت اضافه/ویرایش شد.', 'success'],
    'remove-ad': ['حذف شد!', 'تبلیغ از لیست حذف شد.', 'info', true],
    'edit-ad': ['آماده ویرایش!', 'تبلیغ برای ویرایش انتخاب شد.', 'info'],
    'error-server-pay': ['خطای پرداخت!', 'خطایی در دریافت اطلاعات از سرور رخ داده است. لطفا چند دقیقه بعد تلاش کنید یا با پشتیبانی تماس بگیرید!', 'error'],
    'add-message-by-list': ['افزوده شد!', 'با موفقیت به سبد خرید اضافه شد.', 'success'],
    'error-code-free-pay': ['انجام نشد!', 'اطلاعات وارد شده ثبت نشد. کد 123456!', 'error'],
    'unknwon-error': ['خطا!', 'خطایی ناشناخته رخ داد!', 'error'],
    'submited-acc-info': ['انجام شد!', 'اطلاعات وارد شده با موفقیت ثبت شد.', 'success'],
    'no-submited-acc-info': ['توجه!', 'قبل از ایجاد ربات با سرویس های کراپلود، مطالعه قوانین و مقررات و حریم خصوصی الزامی است..', 'error'],
    'true-make-new-bot': ['ساخته شد !', 'ربات شما با موفقیت ساخته شد، برای مدیریت ربات خود، به داشبورد مراجعه کنید .', 'success'],
    'add-message-ticket-list': ['ارسال شد!', 'تیکت به پشتیبانی ارسال شد. پاسخ تیکت شما از طریق ایمیل و یا اعلانی در داشبورد شخصی تان ارسال خواهد شد.', 'success'],
    'error-code-free-pay': ['خطای کد تخفیف !', 'کد تخفیف وارد شده نادرست است!', 'error'],
    'error-exist-bot-before': ['ربات وجود دارد !', 'توکن ربات وارد شده از قبل در سرور ما موجود میباشد، لطفا توکن تکراری وارد نکنید. به سوالات متداول مراجعه کنید یا با پشتیبانان ما تماس بگیرید !', 'error'],
    'error-token-bot-telegram': ['توکن وارد اشتباه است!', 'ما توکن شما را برسی کردیم و از طرف سرور تلگرام خطایی دریافت کردیم، گویا توکن وارد شده اشتباه است یا حذف شده است. لطفا توکن خود را بروزرسانی کنید یا به مرحله قبل بازگردید و مجدد تلاش کنید. در صورتی که به نتیجه ای نرسیدید، به سوالات متداول ما مراجعه کنید یا با پشتیبانان ما تماس بگیرید !', 'error'],
};

Object.keys(alerts).forEach(id => {
    const elements = document.querySelectorAll(`#${id}`);
    elements.forEach(element => {
        element.addEventListener('click', function () {
            showAlert(...alerts[id]);
        });
    });
});