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
    'add-to-cart': ['افزوده شد!', 'محصول به سبد خرید اضافه شد.', 'success'],
    'remove-from-cart': ['حذف شد!', 'محصول از سبد خرید حذف شد.', 'info', true],
    'registration-success': ['ثبت‌نام موفق!', 'شما با موفقیت ثبت‌نام کردید.', 'success'],
    'login-fail': ['ورود ناموفق!', 'لطفاً اطلاعات خود را بررسی کنید.', 'error'],
    'server-error': ['خطای سرور!', 'مشکلی در ارتباط با سرور پیش آمده است.', 'error'],
    'add-to-favorites': ['افزوده شد!', 'با موفقیت به لیست علاقه مندی ها افزوده شد.!', 'success']
};

Object.keys(alerts).forEach(id => {
    document.getElementById(id).addEventListener('click', function  () {
        showAlert(...alerts[id]);
    });
});