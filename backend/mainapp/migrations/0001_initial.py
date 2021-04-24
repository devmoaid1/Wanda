# Generated by Django 3.0.5 on 2021-04-24 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.URLField()),
                ('picture2', models.URLField()),
                ('name', models.CharField(max_length=50)),
                ('Manfacture', models.CharField(max_length=100)),
                ('price', models.FloatField()),
                ('color', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
                ('description', models.TextField()),
                ('description2', models.TextField()),
                ('co2', models.CharField(max_length=250)),
                ('fuel', models.CharField(max_length=250)),
                ('quantity', models.PositiveIntegerField()),
            ],
        ),
    ]
