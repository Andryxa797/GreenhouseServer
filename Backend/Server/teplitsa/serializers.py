from rest_framework import serializers

from teplitsa.models import SensorData, ManagedSystems, CommandToManage, Photo


class SensorDataSerializerList(serializers.ModelSerializer):
    """
    Просмотр всех записей с данными датчиков
    """

    class Meta:
        model = SensorData
        fields = '__all__'


class SensorDataSerializerCreate(serializers.ModelSerializer):
    """
    Создание записи с данными датчиков
    """

    class Meta:
        model = SensorData
        exclude = ['owner']


class PhotoSerializerList(serializers.ModelSerializer):
    """
    Просмотр всех записей с данными датчиков
    """

    class Meta:
        model = Photo
        fields = '__all__'


class PhotoSerializerCreate(serializers.ModelSerializer):
    """
    Создание записи с данными датчиков
    """

    class Meta:
        model = Photo
        exclude = ['owner']


class ManagedSystemsSerializerList(serializers.ModelSerializer):
    """
    Просмотр всех данных состояния систем управления теплицей
    """

    class Meta:
        model = ManagedSystems
        fields = '__all__'


class ManagedSystemsSerializerCreate(serializers.ModelSerializer):
    """
    Создание записи с данными состояния систем управления теплицей
    """

    class Meta:
        model = ManagedSystems
        exclude = ['owner']


class CommandToManageSerializerCreate(serializers.ModelSerializer):
    """
    Создание записи с данными состояния систем управления теплицей
    """

    class Meta:
        model = CommandToManage
        exclude = ['owner']
