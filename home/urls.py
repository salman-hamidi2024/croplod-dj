from django.urls import path
from home.views import *


urlpatterns = [
    path('', home, name="homepage"),
    path('extension-details/', extension_details, name="extensions-details"),
    path('faq_questions/', Faq_Questions_List_View.as_view(), name="faq_questions"),
    path('contact-us/', Contact_Us.as_view(), name="contact-us"),
    path('terms/', terms, name="terms_page"),
]
