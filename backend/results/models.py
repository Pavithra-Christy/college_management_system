from django.db import models

# Create your models here.
### results/models.py
class Result(models.Model):
    student = models.ForeignKey('students.Student', on_delete=models.CASCADE)
    course = models.ForeignKey('courses.Course', on_delete=models.CASCADE)
    grade = models.CharField(max_length=2)