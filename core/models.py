from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Gender(models.Model):
	description = models.CharField(max_length=30)


class User(User):
	name = models.CharField(max_length=100, blank=False, null=False, verbose_name='Nome')
	gender = models.ForeignKey(Gender, on_delete=models.SET_NULL, null=True)