from django.contrib import admin
from .models import Utilisateur, Avocat

admin.site.register(Utilisateur)
admin.site.register(Avocat)
