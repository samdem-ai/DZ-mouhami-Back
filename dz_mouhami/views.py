from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .serializers import UserSerializer,AvocatSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404


@api_view(['POST','GET'])
def login_user(request):
    if request.method == 'POST':
        user = get_object_or_404(User,username = request.data['username'])
        if not user.check_password(request.data['password']) : 
            return Response({'detail':"not found"},status = status.HTTP_400_BAD_REQUEST)
        
        token,created=Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance= user)

        return Response({'token':token.key,'user':serializer.data})
    elif request.method == 'GET':
        return Response({}) #front page

@api_view(['POST','GET'])
def signup_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid() : 
            serializer.save()
            user=User.objects.get(username = request.data["username"])
            user.set_password(request.data['password'])
            user.save()
            token=Token.objects.create(user=user)
            return Response({"token":token.key,"user":serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        return Response({})


@api_view(['POST','GET'])
def signup_avocat(request):
    if request.method == 'POST':
        serializer = AvocatSerializer(data=request.data)
        if serializer.is_valid() : 
            serializer.save()
            avocat=User.objects.get(username = request.data["username"])
            avocat.set_password(request.data['password'])
            avocat.save()
            token=Token.objects.create(user=user)
            return Response({"token":token.key,"user":serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        return Response({})

         
""" to verify the tokens work
from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes(IsAuthenticated())
def test_token(request):
    return Response("passed for {}",format(request.user.email))"""

