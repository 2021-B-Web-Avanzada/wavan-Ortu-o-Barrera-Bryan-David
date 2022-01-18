from django.db import models

# Create your models here.


class Pais(models.Model):
    idioma = models.CharField(max_length=100)
    fundacion = models.DateField()
    presidente = models.CharField(max_length=100)
    poblacion = models.IntegerField()
    prefijo_telefonico = models.CharField(max_length=10)


class Ciudad(models.Model):
    pais = models.ForeignKey(Pais, on_delete=models.CASCADE)
    es_capital = models.BooleanField(default=False)
    fundacion = models.DateField()
    superficie = models.DecimalField(max_digits=20, decimal_places=2)
    poblacion = models.IntegerField()
