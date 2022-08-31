from django.shortcuts import render,redirect
from django.contrib.auth import authenticate , login, logout
from django.contrib import messages

# Create your views here.


def welcome (request):
	return render(request,'home.html')

def login_user(request):
	if request.POST:
		type_form = request.POST.get('type_form')
		if type_form == 'cadastro':
			cadastrar_usuario()
		elif type_form == 'login':
			username = request.POST.get('loginEmail')
			password = request.POST.get('loginPassword')
			usuario = authenticate(username=username, password=password)
			print('usuario:',usuario)
			if usuario is not None:
				login(request, usuario)
				return redirect('home/')
			else:
				messages.error(request,"Usuário ou senha inválidos.")
	return render(request,'index.html')

def cadastrar_usuario():
	from pdb import set_trace;set_trace()

	return

def logout_user(request):
	if request.POST:
		# type_form = request.POST.get('type_form')
		# if type_form == 'logout':
		logout(request)
		return redirect('/')
