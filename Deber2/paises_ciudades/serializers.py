from rest_framework import serializers

from paises_ciudades.models import Ciudad, Pais


class PaisSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pais
        fields = '__all__'


class CiudadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ciudad
        fields = '__all__'