from django.urls import  path
from bot.views import *

urlpatterns = [
    path("newbot/", new_bot, name="new_bot"),
]
