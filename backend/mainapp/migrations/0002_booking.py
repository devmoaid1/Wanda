# Generated by Django 3.0.5 on 2021-04-01 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('date', models.DateTimeField(auto_now_add=True, primary_key=True, serialize=False)),
                ('cars', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='mainapp.Car')),
            ],
        ),
    ]
