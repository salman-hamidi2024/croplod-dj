from django.db import models


class Faq_Questions(models.Model):
      title = models.CharField(max_length=50)
      content = models.TextField()

      def __str__(self):
            return self.title
      


class Request_Type(models.Model):
      name = models.CharField("نوع درخواست", max_length=20)

      def __str__(self):
            return self.name
      

class Ticket(models.Model):
      full_name = models.CharField("نام و نام خانوادگی", max_length=40)
      email = models.EmailField("ایمیل")
      code = models.CharField("کد خطا", max_length=10)
      request_type = models.ForeignKey(Request_Type, on_delete=models.SET_NULL, verbose_name="نوع درخواست", null=True)
      content = models.TextField("پیام شما (توضیحات کامل مشکل یا سؤال خود را وارد کنید)")

      def __str__(self):
            return self.full_name

