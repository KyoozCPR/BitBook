from django import forms
from .models import Termini
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm


class BaseForm(forms.Form):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs.update({"id" : "cerca"})   

    
    class Media:
        abstract = True

class TerminiForm(forms.ModelForm, BaseForm):

    class Meta:
        model = Termini 
        fields = ["name"]
        widgets = {
            "name" : forms.TextInput(attrs={'placeholder': 'Ricerca'}),
        }