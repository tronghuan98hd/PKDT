# Generated by Django 3.1.1 on 2020-10-12 09:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.DecimalField(decimal_places=0, default=0, max_digits=10)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('total_money', models.DecimalField(decimal_places=2, max_digits=10)),
                ('total_product', models.DecimalField(decimal_places=0, default=0, max_digits=10)),
                ('payment', models.DecimalField(decimal_places=0, default=0, max_digits=10)),
            ],
            options={
                'db_table': 'bill',
            },
        ),
        migrations.RenameModel(
            old_name='Picture',
            new_name='Image',
        ),
        migrations.RenameField(
            model_name='color',
            old_name='code',
            new_name='hexa_code',
        ),
        migrations.RenameField(
            model_name='guest',
            old_name='created_date',
            new_name='create_at',
        ),
        migrations.RenameField(
            model_name='guest',
            old_name='modified_date',
            new_name='update_at',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='create_date',
            new_name='create_at',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='total',
            new_name='total_count',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='modified_date',
            new_name='update_at',
        ),
        migrations.AlterField(
            model_name='product_color',
            name='product_id',
            field=models.ForeignKey(db_column='product_id', on_delete=django.db.models.deletion.CASCADE, related_name='product_color', to='api.product'),
        ),
        migrations.AlterModelTable(
            name='image',
            table='image',
        ),
        migrations.AlterModelTable(
            name='product_color',
            table='product_color',
        ),
        migrations.CreateModel(
            name='Bill_Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.DecimalField(decimal_places=0, default=0, max_digits=10)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('bill_id', models.ForeignKey(db_column='bill_id', on_delete=django.db.models.deletion.CASCADE, related_name='bill', to='api.bill')),
                ('product_id', models.ForeignKey(db_column='product_id', on_delete=django.db.models.deletion.CASCADE, related_name='product_bill', to='api.product')),
            ],
            options={
                'db_table': 'bill_product',
            },
        ),
    ]
