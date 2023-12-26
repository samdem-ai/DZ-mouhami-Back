from rest_framework import serializers
from django.contrib.auth.models import User
from .models import RendezVous,Avocat

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id','username','password','email','nom','perfered_language']
        extra_kwargs = {'password': {'write_only': True}}


class RendezVousSerializer(serializers.ModelSerializer):
    client = UserSerializer(read_only=True)

    class Meta:
        model = RendezVous
        fields = ['id', 'date', 'client', 'lieu']

class AvocatSerializer(serializers.ModelSerializer):
    rendez_vous = RendezVousSerializer(many=True, read_only=True)

    class Meta:
        model = Avocat
        fields = ['id', 'username', 'password', 'email', 'speciality', 'coordonnees', 'address', 'langues', 'experience', 'evaluations', 'loaclisation', 'rendez_vous']
        extra_kwargs = {'password': {'write_only': True}}