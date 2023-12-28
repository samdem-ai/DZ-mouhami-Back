from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import Group, Permission
from django.utils.translation import gettext_lazy as _
class Utilisateur(AbstractUser):
    nom = models.CharField(max_length=255)
    langue_preference = models.CharField(max_length=100)
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="utilisateur_set",
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="utilisateur_set",
        related_query_name="user",
    )

class Avocat(AbstractUser):
    specialite = models.CharField(max_length=255)
    nom = models.CharField(max_length=255)
    coordonnees = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    langues = models.CharField(max_length=255)
    experiences = models.TextField()
    evaluations = models.ManyToManyField('Evaluation')

    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="avocat_set",
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="avocat_set",
        related_query_name="user",
    )

class Admin(AbstractUser):
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="admin_set",
        related_query_name="admin",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('admin permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="admin_set",
        related_query_name="admin",
    )

class Evaluation(models.Model):
    note = models.IntegerField()
    commentaire = models.TextField()

class RendezVous(models.Model):
    date = models.DateTimeField()
    lieu = models.CharField(max_length=255)
    client = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)
