# Generated by Django 4.0 on 2022-08-31 21:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_gender_user_delete_usuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='gender_id',
        ),
        migrations.DeleteModel(
            name='Gender',
        ),
    ]
