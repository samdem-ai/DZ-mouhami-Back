# Generated by Django 5.0 on 2024-01-24 13:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_rename_availability_timeslot_day_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='lawyerprofile',
            name='rating',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='time_slot',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.timeslot'),
        ),
        migrations.AlterField(
            model_name='timeslot',
            name='lawyer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='time_slots', to='core.lawyerprofile'),
        ),
    ]
