# Generated by Django 3.0.5 on 2021-04-19 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_dealership'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('name', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('phone', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=100)),
                ('pic', models.ImageField(blank=True, null=True, upload_to='')),
                ('bookings', models.ManyToManyField(to='mainapp.Booking')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
