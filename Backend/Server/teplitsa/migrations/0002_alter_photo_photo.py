# Generated by Django 3.2.8 on 2022-05-14 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teplitsa', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='photo',
            field=models.ImageField(upload_to='photo/%Y/%m/%d', verbose_name='Фото'),
        ),
    ]
