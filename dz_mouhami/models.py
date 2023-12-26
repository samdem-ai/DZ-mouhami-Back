# models.py
from django.contrib.auth.models import User
from django.db import models

class RendezVous(models.Model):
    date = models.DateTimeField()
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    lieu = models.CharField(max_length=255)

class Avocat(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField()
    speciality = models.CharField(max_length=255)
    coordonnees = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    langues = models.JSONField()
    experience = models.IntegerField()
    evaluations = models.JSONField()
    loaclisation = models.CharField(max_length=255)
    rendez_vous = models.ManyToManyField(RendezVous, related_name='avocats')
