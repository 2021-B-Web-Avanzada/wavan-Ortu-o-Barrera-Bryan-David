from rest_framework import serializers

from paises_ciudades.models import Ciudad, Modelo


class PaisSerializer(serializers.ModelSerializer):

    class Meta:
        model = Modelo
        fields = '__all__'


class CiudadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ciudad
        fields = '__all__'