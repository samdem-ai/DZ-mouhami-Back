from rest_framework import serializers
from .models import Utilisateur, Avocat, Admin, Evaluation, RendezVous

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['id', 'username', 'password', 'email', 'nom', 'langue_preference'
        ]

class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = ['id', 'note', 'commentaire'
        ]

class AvocatSerializer(serializers.ModelSerializer):
    evaluations = EvaluationSerializer(many=True, read_only=True)

    class Meta:
        model = Avocat
        fields = ['id', 'username', 'password', 'email', 'nom', 'specialite', 'coordonnees', 'adresse', 'langues', 'experiences', 'evaluations', 'nom', 'langue_preference']

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id', 'username', 'password', 'email', 'nom', 'langue_preference']


class RendezVousSerializer(serializers.ModelSerializer):
    class Meta:
        model = RendezVous
        fields = ['id', 'date', 'lieu', 'client', 'avocat']
