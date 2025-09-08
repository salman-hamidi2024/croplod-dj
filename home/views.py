from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.contrib import messages
from django.views.generic import *
from .forms import *
from .models import *



def home(request):
    return render(request, "index.html")


def extension_details(request):
    return render(request, "extension-details.html")


class Faq_Questions_List_View(ListView):
    template_name = "questions.html"
    model = Faq_Questions
    context_object_name = "questions"


class Contact_Us(CreateView):
    template_name = "contact-us.html"
    form_class = Ticket_Form
    model = Ticket
    success_url = reverse_lazy("contact-us")


def terms(request):
    return render(request, "terms.html") 



def notfound(request):
    return render(request, "404.html", status=404)