from django.contrib import admin
from .models import Product, Category, Supplier, Color, Image, Product_Color

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Supplier)
admin.site.register(Color)
admin.site.register(Image)
admin.site.register(Product_Color)