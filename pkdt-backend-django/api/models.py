from django.db import models
from django import forms
from django.contrib.auth.hashers import make_password
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='post_images/category',
                              blank=True,
                              default='media/post_images/category/No-img.jpg')
    count = models.DecimalField(max_digits=10, decimal_places=0, default=0)

    class Meta:
        db_table = 'category'


class Supplier(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='post_images/suplies',
                              blank=True,
                              default='media/post_images/supplier/No-img.jpg')
    address = models.CharField(max_length=100)
    count = models.DecimalField(max_digits=10, decimal_places=0, default=0)
    class Meta:
        db_table = 'supplier'


class Image(models.Model):
    url = models.FileField(upload_to='post_images/product',
                           blank=True,
                           default='media/post_images/product/No-img.jpg')
    meta = models.CharField(max_length=200)
    product_id = models.ForeignKey('Product', on_delete=models.CASCADE,
                                   related_name='pictures', db_column='product_id', null=True)

    class Meta:
        db_table = 'image'


class Guest(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    user = models.CharField(max_length=50)
    password = models.CharField(max_length=300)
    create_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    class Meta:
        db_table = 'guest'

    def save(self, *args, **kwargs):
        self.password = make_password(self.crew_password)
        super(Guest, self).save(*args, **kwargs)


class Color(models.Model):
    name = models.CharField(max_length=50)
    hexa_code = models.CharField(max_length=50)

    class Meta:
        db_table = 'color'


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(max_length=300)
    total_count = models.DecimalField(max_digits=10, decimal_places=0, default=0)
    create_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    update_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    category = models.ForeignKey(
        'Category', on_delete=models.CASCADE, related_name='category', db_column='category_id', null=True)
    supplier = models.ForeignKey(
        'Supplier', on_delete=models.CASCADE, related_name='supplier', db_column='supplier_id', null=True)
    main_image = models.ImageField(upload_to='post_images/product',
                                   blank=True,
                                   default='media/post_images/product/main/No-img.jpg')

    class Meta:
        db_table = 'product'

class Product_Color(models.Model):
    color_id = models.ForeignKey(
        'Color', on_delete=models.CASCADE, related_name='color', db_column='color_id')
    product_id = models.ForeignKey(
        'Product', on_delete=models.CASCADE, related_name='product_color', db_column='product_id')
    count = models.DecimalField(max_digits=10, decimal_places=0, default=0)

    class Meta:
        db_table = 'product_color'

class Bill(models.Model):
    state = models.DecimalField(max_digits=10, decimal_places=0, default=0)
    create_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    total_money = models.DecimalField(max_digits=10, decimal_places=2)
    total_product = models.DecimalField(max_digits=10, decimal_places=0, default=0)
    payment = models.DecimalField(max_digits=10, decimal_places=0, default=0)

    class Meta:
        db_table = 'bill'

class Bill_Product(models.Model):
    bill_id = models.ForeignKey(
        'Bill', on_delete=models.CASCADE, related_name='bill', db_column='bill_id')
    product_id = models.ForeignKey(
        'Product', on_delete=models.CASCADE, related_name='product_bill', db_column='product_id')
    count = models.DecimalField(max_digits=10, decimal_places=0, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'bill_product'