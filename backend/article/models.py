from django.db import models

class Article(models.Model):
    label = models.CharField(max_length=50)
    image = models.ImageField(upload_to='photos/%Y/%m,%d/')
    content = models.CharField(max_length=5000)

    def __str__(self):
        return self.label
    