# Generated by Django 4.0.4 on 2022-04-25 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_pokemon_created_pokemon_updated'),
    ]

    operations = [
        migrations.AddField(
            model_name='pokemon',
            name='fieldnotes',
            field=models.TextField(blank=True, null=True),
        ),
    ]