from django import forms
from .models import Ticket

class Ticket_Form(forms.ModelForm):
    class Meta:
            model = Ticket
            fields = "__all__"


            widgets = {
            "full_name": forms.TextInput(attrs={
                  "placeholder": "نام و نام خانوادگی",
                  "required": True,
                  "aria-label": "نام و نام خانوادگی",
                  "class": "block w-full p-3 outline dark:outline-none outline-1 -outline-offset-1 "
                              "placeholder:text-gray-400 transition-all col-span-6 text-gray-800 dark:text-gray-100 "
                              "dark:bg-gray-900 bg-slate-100 border border-transparent hover:border-slate-200 "
                              "appearance-none rounded-md outline-none focus:bg-white focus:border-indigo-400 "
                              "focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400"
            }),
            "email": forms.EmailInput(attrs={
                  "placeholder": "ایمیل",
                  "required": True,
                  "aria-label": "ایمیل",
                  "class": "block w-full p-3 outline dark:outline-none outline-1 -outline-offset-1 "
                              "placeholder:text-gray-400 transition-all col-span-6 text-gray-800 dark:text-gray-100 "
                              "dark:bg-gray-900 bg-slate-100 border border-transparent hover:border-slate-200 "
                              "appearance-none rounded-md outline-none focus:bg-white focus:border-indigo-400 "
                              "focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400"
            }),
            "code": forms.TextInput(attrs={
                  "placeholder": "کد خطا ( CCODE84510 )",
                  "required": True,
                  "aria-label": "کد خطا",
                  "class": "block w-full p-3 outline dark:outline-none outline-1 -outline-offset-1 "
                              "placeholder:text-gray-400 transition-all col-span-12 text-gray-800 dark:text-gray-100 "
                              "dark:bg-gray-900 bg-slate-100 border border-transparent hover:border-slate-200 "
                              "appearance-none rounded-md outline-none focus:bg-white focus:border-indigo-400 "
                              "focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400"
            }),
            "request_type": forms.Select(attrs={
                  "required": True,
                  "aria-label": "نوع درخواست",
                  "class": "block w-full p-3 outline-none placeholder:text-gray-400 transition-all col-span-12 "
                              "text-gray-800 dark:text-gray-100 dark:bg-gray-900 bg-slate-100 border border-transparent "
                              "hover:border-slate-200 appearance-none rounded-lg focus:bg-white focus:border-indigo-400 "
                              "focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400"
            }),
            "content": forms.Textarea(attrs={
                  "placeholder": "پیام شما (توضیحات کامل مشکل یا سؤال خود را وارد کنید)",
                  "required": True,
                  "aria-label": "پیام",
                  "class": "w-full h-200 p-3 outline dark:outline-none outline-1 -outline-offset-1 "
                              "placeholder:text-gray-400 transition-all col-span-12 text-gray-800 dark:text-gray-100 "
                              "dark:bg-gray-900 bg-slate-100 border border-transparent hover:border-slate-200 "
                              "appearance-none rounded-md outline-none focus:bg-white focus:border-indigo-400 "
                              "focus:ring-2 focus:ring-indigo-100 dark:focus:ring-blue-400"
            }),
            }
