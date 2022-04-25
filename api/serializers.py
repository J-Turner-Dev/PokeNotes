from rest_framework.serializers import ModelSerializer
from .models import Note, Pokemon

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class PokemonSerializer(ModelSerializer):
    class Meta:
        model = Pokemon
        fields = '__all__'