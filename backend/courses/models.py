### courses/models.py
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    faculty = models.ForeignKey('faculty.Faculty', on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.title