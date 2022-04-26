from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]

class Pokemon(models.Model):
    name = models.TextField(null=True, blank=True)
    number = models.TextField(null=True, blank=True)
    poketype = models.TextField(null=True, blank=True)
    classification = models.TextField(null=True, blank=True)
    height = models.TextField(null=True, blank=True)
    weight = models.TextField(null=True, blank=True)
    capturerate = models.TextField(null=True, blank=True)
    xpgrowth = models.TextField(null=True, blank=True)
    hitpoints = models.IntegerField(null=True, blank=True)
    attack = models.IntegerField(null=True, blank=True)
    defense = models.IntegerField(null=True, blank=True)
    special = models.IntegerField(null=True, blank=True)
    speed = models.IntegerField(null=True, blank=True)
    fieldnotes = models.TextField(null=True, blank=True)
    image = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name[0:50]