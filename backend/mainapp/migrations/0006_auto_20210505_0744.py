# Generated by Django 3.0.5 on 2021-05-04 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0005_customer_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='pic',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
