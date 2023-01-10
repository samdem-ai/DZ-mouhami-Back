# Generated by Django 5.0 on 2024-01-07 16:05

import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=255)),
                ('zip_code', models.CharField(max_length=255)),
                ('country', models.CharField(max_length=255)),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=10)),
                ('longitude', models.DecimalField(decimal_places=6, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Administrator',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ClientProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField()),
                ('gender', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.address')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='LawyerProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('specialization', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('bio', models.CharField(max_length=255)),
                ('language', models.CharField(max_length=255)),
                ('approved', models.BooleanField()),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.address')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='LawyerDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pdf_file', models.FileField(upload_to='lawyer_documents/', validators=[django.core.validators.FileExtensionValidator(['pdf'])])),
                ('image', models.ImageField(blank=True, null=True, upload_to='lawyer_images/')),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documents', to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('comment', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.clientprofile')),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='TimeSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('availability', models.CharField(max_length=255)),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=255)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.clientprofile')),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.lawyerprofile')),
                ('time_slot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.timeslot')),
            ],
        ),
    ]