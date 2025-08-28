from django.shortcuts import render
from .forms import *
from .models import *



def home(request):
    return render(request, "index.html")


def extension_details(request):
    return render(request, "extension-details.html")

def faq_questions(request):
    questions = Faq_Questions.objects.all()

    context = {
        'questions' : questions,
    }
    return render(request, 'questions.html', context)



def contactus(request):
    form = Ticket_Form()
    if request.method == "POST":
        pass
    return render(request, "contact-us.html")















def notfound(request):
    return render(request, "404.html", status=404)