### faculty/models.py
from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    department = models.CharField(max_length=100)
    phone = models.CharField(max_length=15, blank=True, null=True)
    
    def __str__(self):
        return self.name