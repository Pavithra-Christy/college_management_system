from django.db import models

# Create your models here.
### departments/models.py
class Department(models.Model):
    name = models.CharField(max_length=255)
