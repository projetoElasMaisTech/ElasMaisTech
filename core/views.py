from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from core.models import Gender, User


# Create your views here.

@login_required(login_url='/')
def home (request):
	return render(request,'home.html')

def login_user(request):
	if request.POST:
		username = request.POST.get('loginEmail')
		password = request.POST.get('loginPassword')
		usuario = authenticate(username=username, password=password)
		if usuario is not None:
			login(request, usuario)
			return redirect('home/')
		else:
			messages.error(request,"Usuário ou senha inválidos.")
	return render(request,'index.html')

def user_submit(request):
	if request.POST:
		username_input = request.POST.get('inputEmail')
		user_registers = User.objects.filter(username=username_input)
		if len(user_registers) > 0:
			messages.error(request,"E-mail já cadastrado.")
			return redirect('/')
		usuario = User()
		usuario.name = request.POST.get('inputName')
		usuario.username = request.POST.get('inputEmail')
		usuario.email = request.POST.get('inputEmail')
		usuario.set_password(request.POST.get('inputPassword'))
		usuario.gender = Gender.objects.filter(id = int(request.POST.get('user_gender'))).first()
		usuario.save()

		messages.success(request, "Cadastro realizado com sucesso! Faça agora o login com seu e-mail e senha!")

	return redirect('/')

def logout_user(request):
	if request.POST:
		logout(request)
		return redirect('/')

@login_required(login_url='/')
def courses (request):
	return render(request,'access_content.html')
