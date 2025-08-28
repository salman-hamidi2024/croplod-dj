from django import forms 
from .models import *


class Ticket_Form(forms.ModelForm):
      class Meta:
            model = Ticket
            fields = "__all__"