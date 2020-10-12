from .models import Product, Category, Image, Color, Supplier, Guest
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('url',)


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ('name', 'code')


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'main_image')


class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    supplier = serializers.CharField(source='supplier.name', read_only=True)
    images = ImageSerializer(many=True, read_only=True)
    colors = ColorSerializer(many=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'main_image', 'description',
                  'total', 'images', 'category', 'supplier', 'colors')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'image')


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = ('id', 'name', 'image')


class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ('id', 'name', 'address')
