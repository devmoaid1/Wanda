# Generated by Django 3.0.5 on 2021-05-04 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0004_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='pic',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]