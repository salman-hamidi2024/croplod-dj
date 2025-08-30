from django.shortcuts import render, redirect
from django.contrib import messages
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
        form = Ticket_Form(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "درخواست ارسال شد")
            return redirect('contact-us')
        else: 
            messages.error(request, "همه فیلد هارو پرکنید")
            return redirect('contact-us')
    
    context = {
        'form' : form,
    }
    return render(request, "contact-us.html", context)





def notfound(request):
    return render(request, "404.html", status=404)