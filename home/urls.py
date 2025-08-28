from django.urls import path
from home.views import *

urlpatterns = [
    path('', home, name="homepage"),
    path('extension-details', extension_details, name="extensions-details"),
    path('faq_questions', faq_questions, name="faq_questions"),
    path('contact-us', contactus, name="contact-us"),
]
