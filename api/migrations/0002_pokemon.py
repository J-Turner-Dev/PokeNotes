# Generated by Django 4.0.4 on 2022-04-24 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pokemon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('number', models.TextField(blank=True, null=True)),
                ('poketype', models.TextField(blank=True, null=True)),
                ('classification', models.TextField(blank=True, null=True)),
                ('height', models.TextField(blank=True, null=True)),
                ('weight', models.TextField(blank=True, null=True)),
                ('capturerate', models.TextField(blank=True, null=True)),
                ('xpgrowth', models.TextField(blank=True, null=True)),
                ('hitpoints', models.IntegerField(blank=True, null=True)),
                ('attack', models.IntegerField(blank=True, null=True)),
                ('defense', models.IntegerField(blank=True, null=True)),
                ('special', models.IntegerField(blank=True, null=True)),
                ('speed', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
