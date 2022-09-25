FROM python:3.9-buster


WORKDIR /opt/app


COPY . .

RUN pip3 install -r requirements.txt --cache-dir /opt/app/pip_cache

RUN python3 manage.py migrate

RUN python3 manage.py createsuperuser

EXPOSE 8000
    

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]