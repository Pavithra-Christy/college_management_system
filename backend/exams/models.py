### exams/models.py
from django.db import models

class Exam(models.Model):
    course = models.ForeignKey('courses.Course', on_delete=models.CASCADE, related_name='exams')
    date = models.DateField()
    duration = models.IntegerField(help_text='Duration in minutes')

    def __str__(self):
        return f'{self.course.title} - {self.date}'
