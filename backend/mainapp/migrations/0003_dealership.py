# Generated by Django 3.0.5 on 2021-04-04 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_booking'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dealership',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=50)),
                ('cars', models.ManyToManyField(to='mainapp.Car')),
            ],
        ),
    ]
