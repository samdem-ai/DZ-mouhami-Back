# Generated by Django 4.2.7 on 2024-01-28 15:31

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


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
                ('latitude', models.DecimalField(blank=True, decimal_places=6, max_digits=10, null=True)),
                ('longitude', models.DecimalField(blank=True, decimal_places=6, max_digits=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ClientProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField()),
                ('gender', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client_address', to='core.address')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='client_profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['user__first_name', 'user__last_name'],
            },
        ),
        migrations.CreateModel(
            name='LawyerProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('specialization', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('bio', models.CharField(max_length=255)),
                ('language', models.CharField(max_length=255)),
                ('approved', models.BooleanField(default=False)),
                ('rating', models.IntegerField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, max_length=500, null=True, upload_to='core/images')),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lawyer_address', to='core.address')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='lawyer_profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['user__first_name', 'user__last_name'],
            },
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('google_id', models.CharField(max_length=255, null=True, unique=True)),
                ('github_id', models.CharField(max_length=255, null=True, unique=True)),
                ('image', models.ImageField(blank=True, max_length=500, null=True, upload_to='core/images')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TimeSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(max_length=255)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='time_slots', to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.PositiveIntegerField()),
                ('comment', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.clientprofile')),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='LawyerImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='core/images')),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='LawyerDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pdf_file', models.FileField(upload_to='core/docs', validators=[django.core.validators.FileExtensionValidator(['pdf'])])),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documents', to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(default=django.utils.timezone.now, max_length=255)),
                ('start_time', models.TimeField(default=django.utils.timezone.now)),
                ('end_time', models.TimeField(default=django.utils.timezone.now)),
                ('status', models.CharField(max_length=255)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.clientprofile')),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.lawyerprofile')),
            ],
        ),
        migrations.CreateModel(
            name='Administrator',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]