from django.conf import settings
from django.db import models


class SensorData(models.Model):
    """
    Показание датчиков
    """
    created_at = models.DateTimeField(verbose_name='Дата создания записи', auto_now_add=True)
    temp_upstairs = models.DecimalField(max_digits=20, decimal_places=6, verbose_name='Температура в верхней части')
    temp_downstairs = models.DecimalField(max_digits=20, decimal_places=6, verbose_name='Температура в нижней части')
    temp_in_ground = models.DecimalField(max_digits=20, decimal_places=6, verbose_name='Температура  земли')
    temp_street = models.DecimalField(max_digits=20, decimal_places=6, verbose_name='Температура на улице')
    humidity_greenhouse = models.DecimalField(max_digits=20, decimal_places=6, verbose_name='Влажность в теплице')
    humidity_greenhouse_in_ground = models.IntegerField(verbose_name='Влажность земли')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE,
                              verbose_name='Владелец записи',
                              related_name='owner_sensor_data')

    class Meta:
        verbose_name = 'Показание датчиков'
        verbose_name_plural = 'Показания датчиков'


class ManagedSystems(models.Model):
    """
    Состояния систем управления теплицей
    """
    created_at = models.DateTimeField(verbose_name='Дата создания записи', auto_now_add=True)
    servo_turn = models.IntegerField(verbose_name='Поворот сервопривода (открытие окон)')
    is_on_lighting = models.BooleanField(verbose_name='Включено ли освещение?')
    is_on_ventilation = models.BooleanField(verbose_name='Включена ли вентиляция?')
    is_on_watering = models.BooleanField(verbose_name='Включен ли полив?')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE,
                              verbose_name='Владелец записи',
                              related_name='owner_managed_systems')

    class Meta:
        verbose_name = 'Состояния систем управления теплицей'
        verbose_name_plural = 'Состоянии систем управления теплицей'


class Photo(models.Model):
    """
    Фотографии
    """
    photo = models.ImageField(upload_to='photo/%Y/%m/%d', verbose_name='Фото')
    created_at = models.DateTimeField(verbose_name='Дата создания записи', auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE,
                              verbose_name='Владелец записи',
                              related_name='owner_photo')

    class Meta:
        verbose_name = 'Фотография'
        verbose_name_plural = 'Фотографии'


class CommandToManage(models.Model):
    """
    Создание команды для управления
    """
    servo_turn = models.IntegerField(verbose_name='Поворот сервопривода (открытие окон)')
    is_on_lighting = models.BooleanField(verbose_name='Включено ли освещение?')
    is_on_ventilation = models.BooleanField(verbose_name='Включена ли вентиляция?')
    is_on_watering = models.BooleanField(verbose_name='Включен ли полив?')
    created_at = models.DateTimeField(verbose_name='Дата создания записи', auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE,
                              verbose_name='Владелец записи',
                              related_name='owner_command_manage')

    class Meta:
        verbose_name = 'Актуальная команда для управления'
        verbose_name_plural = 'Команды для управления'


class Events(models.Model):
    """
    События для управления
    """
    automatic_mode = models.BooleanField(verbose_name='Автоматический режим?')
    is_new_event = models.BooleanField(verbose_name='Есть ли новое событие?')

    class Meta:
        verbose_name = 'Событие для управления'
        verbose_name_plural = 'События для управления'
