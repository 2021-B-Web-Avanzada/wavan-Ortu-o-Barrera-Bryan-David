from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from paises_ciudades.models import Ciudad, Pais
from paises_ciudades.serializers import CiudadSerializer, PaisSerializer


class PaisView(viewsets.ModelViewSet):
    queryset = Pais.objects.all()
    serializer_class = PaisSerializer


class CiudadView(viewsets.ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer
